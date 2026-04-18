"use strict";

const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY; // .env 파일에서 SECRETKEY 값을 가져옴

// 사용자 모델과 bcrypt 라이브러리를 요청
const User = require("../models/User"),
    bcrypt = require("bcryptjs"),
    getUserParams = (body) => {
        return {
            id: body.id,
            email: body.email,
            password: body.password,
        }
    }; // 사용자 모델 요청


const findUserById = async (id) => {
    try {
        const user = await User.findOne({ id: id });
        if (!user) {
            return {
                message: "존재하지 않는 ID입니다.",
                statusCode: 400
            };
        } else
            return { message: "사용자 조회 성공", statusCode: 200, user: user };
    } catch (error) {
        console.log(`Error finding user: ${error.message}`);
        return { message: "사용자 조회 실패", statusCode: 500 };
    }
};

//아이디와 비밀번호 검증하는 함수
const validateUser = async (userData, userParams) => {
    try {
        const isPasswordValid = await bcrypt.compare(userParams.password, userData.password) || userParams.password === userData.password;
        if (isPasswordValid) {
            return {
                message: "비밀번호가 일치합니다.",
                statusCode: 200
            };
        } else {
            return {
                message: "비밀번호가 일치하지 않습니다.",
                statusCode: 400
            };
        }
    } catch (error) {
        console.log(`Error during validation: ${error.message}`);
        return {
            message: "검증하는 도중 오류가 발생했습니다.",
            statusCode: 500
        };
    }
}

// 새로운 토큰 생성 함수
const newToken = async (userData) => {
    try {
        const accessToken = jwt.sign(
            {
                id: userData.id, role: userData.role
            },
            secretKey,
            { expiresIn: "2h", algorithm: "HS256" });
        const refreshToken = jwt.sign(
            { id: userData.id },
            secretKey,
            { expiresIn: "7d", algorithm: "HS256" });
        return {
            message: "토큰생성 성공",
            statusCode: 200,
            accessToken: accessToken,
            refreshToken: refreshToken
        };
    } catch (error) {
        console.log(`Error during token generation: ${error.message}`);
        return {
            message: "토큰생성 중 오류가 발생했습니다.",
            statusCode: 500
        };
    }
};


/**
 * 회원가입, 로그인, accessToken 검증, refreshToken 검증 기능을 구현하는 컨트롤러 객체
 * 
 * 1. signup: 회원가입 기능을 구현하는 컨트롤러 메서드
 * 2. login: 로그인 기능을 구현하는 컨트롤러 메서드
 * 3. checkAccessToken: accessToken 검증 기능을 구현하는 컨트롤러 메서드
 * 4. checkRefreshToken: refreshToken 검증 기능을 구현하는 컨트롤러 메서드
 * 
 * 각 메서드는 요청에서 필요한 데이터를 추출하여 사용자 모델과 상호작용하고, 적절한 응답 메시지와 상태 코드를 반환합니다.
 * 
 * - signup: 사용자 정보를 데이터베이스에 저장하고, 성공 또는 실패 메시지를 반환합니다.
 * - login: 사용자 ID로 사용자를 조회하고, 비밀번호를 검증하여 토큰을 생성하거나 오류 메시지를 반환합니다.
 * - checkAccessToken: 요청 헤더에서 accessToken을 추출하여 유효성을 검증하고, 사용자 정보를 반환하거나 오류 메시지를 반환합니다.
 * - checkRefreshToken: 요청 헤더에서 refreshToken을 추출하여 유효성을 검증하고, 새로운 토큰을 발급하거나 오류 메시지를 반환합니다.
 */

module.exports = {

    // 회원가입 기능을 구현하는 컨트롤러 메서드
    signup: async (req, res, next) => {
        const userParams = getUserParams(req.body);
        try {
            const newUser = await User.create({ ...userParams, role: "user" });
            return res.json({
                message: "회원가입이 성공적으로 완료되었습니다."
                ,
                statusCode: 200
            });
        } catch (error) {
            console.log(`Error creating user: ${error.message}`);
            if (error.keyValue && error.keyValue.id) {
                return res.json({
                    message: "이미 존재하는 ID입니다.",
                    statusCode: 400
                });
            }
            return res.json({
                message: "회원가입 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    },

    // 로그인 기능을 구현하는 컨트롤러 메서드
    login: async (req, res, next) => {
        let userParams = getUserParams(req.body);

        try {
            const user = await findUserById(userParams.id);
            if (user.statusCode !== 200) {
                return res.json(user);
            }

            const userData = user.user;

            // 아이디와 비밀번호 검증
            const validationResponse = await validateUser(userData, userParams);

            if (validationResponse.statusCode !== 200) {
                return res.json(validationResponse);
            } else {
                const tokenResponse = await newToken(userData);
                return res.json(tokenResponse);
            }
        } catch (error) {
            console.log(`Error during login: ${error.message}`);
            return res.json({
                message: "로그인 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    },

    // accessToken 검증 기능을 구현하는 컨트롤러 메서드
    checkAccessToken: async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({
                message: "Access token이 제공되지 않았습니다.",
                statusCode: 400
            });
        }
        const accessToken = authHeader.substring(7); // "Bearer " 제거

        //토큰을 복호화
        const decoded = jwt.verify(accessToken, secretKey);

        if (decoded.exp * 1000 < Date.now()) {
            return res.json({
                message: "Access token이 만료되었습니다.",
                statusCode: 401
            });
        }
        res.json({
            message: "Access token이 유효합니다.",
            statusCode: 200,
            id: decoded.id,
            role: decoded.role
        });
    },

    // refreshToken 검증 기능을 구현하는 컨트롤러 메서드
    checkRefreshToken: async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({
                message: "Access token이 제공되지 않았습니다.",
                statusCode: 400
            });
        }
        const refreshToken = authHeader.substring(7); // "Bearer " 제거

        const decoded = jwt.verify(refreshToken, secretKey);
        if (decoded.exp * 1000 < Date.now()) {
            return res.json({
                message: "Refresh token이 만료되었습니다.",
                statusCode: 401
            });
        }

        const user = await findUserById(decoded.id);
        if (user.statusCode !== 200) {
            return res.json(user);
        }

        const userData = user.user;

        const newTokenResponse = await newToken(userData);
        if (newTokenResponse.statusCode !== 200) {
            return res.json(newTokenResponse);
        }

        return res.json({
            message: "Refresh token이 유효합니다.",
            statusCode: 200,
            accessToken: newTokenResponse.accessToken,
            refreshToken: newTokenResponse.refreshToken,
        });
    }
};

