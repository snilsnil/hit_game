"use strict";

const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY; // .env 파일에서 SECRETKEY 값을 가져옴

// 사용자 모델 라이브러리를 요청
const User = require("../models/User"),
    { CreateUserDto, LoginUserDto } = require("../dto/User.dto"),
    { validateUser, newToken } = require("../services/User.service"),
    userRepository = require("../Repositories/User.repository"),
    userService = require("../services/User.service");


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
        const userParams = new CreateUserDto(req.body, "user");
        const result = await userRepository.createUser(userParams);
        return res.json(result);
    },

    // 로그인 기능을 구현하는 컨트롤러 메서드
    login: async (req, res, next) => {
        const userParams = new LoginUserDto(req.body);

        try {
            const user = await userRepository.findUserById(userParams.id);
            if (user.statusCode !== 200) {
                return res.json(user);
            }

            const userData = user.user;

            // 아이디와 비밀번호 검증
            const validationResponse = await userService.validateUser(userData, userParams);

            if (validationResponse.statusCode !== 200) {
                return res.json(validationResponse);
            } else {
                const tokenResponse = await userService.newToken(userData);
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

        const user = await userRepository.findUserById(decoded.id);
        if (user.statusCode !== 200) {
            return res.json(user);
        }

        const userData = user.user;

        const newTokenResponse = await userService.newToken(userData);
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

