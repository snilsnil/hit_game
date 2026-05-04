"use strict";
// 게임 리스트 모델 요청
const GameList = require("../models/gameList/gameList");
const { getGameListParams, gameData, getModifyData } = require('../middleware/dataToObject')

/**
 * 게임을 추가하는 메서드
 */

module.exports = {
    createGame: async (req, res, next) => {
        const gameList = getGameListParams(req.body, req.files);

        const game = gameData(gameList);

        try {
            const createGameData = await GameList.create(game);
            return res.json({
                message: "게임 추가를 성공적으로 완료되었습니다."
                ,
                statusCode: 200
            });
        } catch (error) {
            console.log(`Error creating game: ${error.message}`);
            if (error.keyValue && error.keyValue.gamePath) {
                return res.json({
                    message: "이미 존재하는 게임입니다.",
                    statusCode: 400
                });
            }
            return res.json({
                message: "게임 추가 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    },

    modifyGame: async (req, res, next) => {

        const gamePath = "/" + req.params.slug
        const gameData = getModifyData(req.body)

        try {
            const modifyGameData = await GameList.findOneAndUpdate({ gamePath: gamePath }, { $set: gameData });
            return res.json({
                message: "게임 추가를 성공적으로 완료되었습니다."
                ,
                statusCode: 200
            });
        } catch (error) {
            console.log(`Error creating game: ${error.message}`);
            if (error.keyValue && error.keyValue.gamePath) {
                return res.json({
                    message: "이미 존재하는 게임입니다.",
                    statusCode: 400
                });
            }
            return res.json({
                message: "게임 추가 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    },

    getGameList: async (req, res, next) => {
        try {
            const getGameListData = await GameList.find({}, 'gameNum gameTitle gameSubTitle gameDeveloper gamePublisher gamePlatform gameReleaseDate gameKoreanSubtitle gameKoreanVoice gamePath')
            return res.json({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameListData
            })
        } catch (error) {
            console.log(`Error findAll game : ${error.message}`)
            return res.json({
                message: "게임 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    },

    getSimpleGameList: async (req, res, next) => {
        try {
            const getGameListData = await GameList.find({}, 'gameNum gameTitle gameSubTitle gamePath gameImage gameDescription gameVideo')
            return res.json({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameListData
            })
        } catch (error) {
            console.log(`Error findAll game : ${error.message}`)
            return res.json({
                message: "게임 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    },

    getGame: async (req, res, next) => {
        const slug = req.params.slug;
        try {
            const getGameData = await GameList.findOne({ gamePath: '/' + slug })
            return res.json({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameData
            })
        } catch (e) {
            console.log(`Error findOne game : ${error.message}`)
            return res.json({
                message: "게임을 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    },

    getGameData: async (req, res, next) => {
        const slug = req.params.slug;
        try {
            const getGameData = await GameList.findOne({ gamePath: '/' + slug })
            return res.json({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameData
            })
        } catch (e) {
            console.log(`Error findOne game : ${error.message}`)
            return res.json({
                message: "게임을 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    },

};

