"use strict";

const { login } = require("./usersController");

const User = require("../models/User"),
    bcrypt = require("bcrypt"),
    getUserParams = (body) => {
        return {
            id: body.id,
            email: body.email,
            password: body.password,
        }
    }; // 사용자 모델 요청

module.exports = {

    signup: (req, res, next) => {
        let userParams = getUserParams(req.body);
        User.create(userParams)
            .then((user) => {
                res.json({
                    message: "회원가입이 성공적으로 완료되었습니다."
                    ,
                    statusCode: 200
                });
            })
            .catch((error) => {
                console.log(`Error creating user: ${error.message}`);
                if (error.keyValue && error.keyValue.id) {
                    return res.json({
                        message: "이미 존재하는 ID입니다.",
                        statusCode: 400
                    });
                }
                res.status(500).json({
                    error: "회원가입 중 오류가 발생했습니다."
                });
            });
    },

    login: (req, res, next) => {
        let userParams = getUserParams(req.body);
        User.findOne({ id: userParams.id })
            .then((user) => {
                if (user) {
                    bcrypt.compare(userParams.password, user.password, (err, result) => {
                        if (result === true) {
                            req.session.isLoggedIn = true;
                            req.session.user = user;
                            res.json({
                                message: "로그인 성공",
                                statusCode: 200
                            });
                        } else {
                            res.json({
                                message: "비밀번호가 일치하지 않습니다.",
                                statusCode: 400
                            });
                        }
                    });
                } else {
                    res.json({
                        message: "존재하지 않는 ID입니다.",
                        statusCode: 400
                    });
                }
            })
            .catch((error) => {
                console.log(`Error during login: ${error.message}`);
                res.status(500).json({
                    error: "로그인 중 오류가 발생했습니다."
                });
            });
    }
};