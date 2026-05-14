//아이디와 비밀번호 검증하는 함수
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

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
    const secretKey = process.env.SECRETKEY;
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

module.exports = { validateUser, newToken };