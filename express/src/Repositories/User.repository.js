const User = require("../models/User")

class UserRepository {
    async findUserById(id) {
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
    }

    async createUser(userData) {
        try {
            const newUser = await User.create({ userData });
            return {
                message: "회원가입이 성공적으로 완료되었습니다.",
                statusCode: 200,
                user: newUser
            };
        } catch (error) {
            console.log(`Error creating user: ${error.message}`);
            if (error.keyValue && error.keyValue.id) {
                return {
                    message: "이미 존재하는 ID입니다.",
                    statusCode: 400
                };
            }
            return {
                message: "회원가입 중 오류가 발생했습니다.",
                statusCode: 500
            };
        }
    }
}

module.exports = new UserRepository();