"use strict";
// 게임 리스트 모델 요청
const GameList = require("../models/gameList/gameList"),
    getGameListParams = (body, files) => {
        return {
            gameTitle: body.gameTitle,
            gameSubTitle: body.gameSubTitle,
            gameGenre: Array.isArray(body.gameGenre)
                ? body.gameGenre
                : [body.gameGenre].filter(Boolean),
            gameDeveloper: Array.isArray(body.gameDeveloper)
                ? body.gameDeveloper
                : [body.gameDeveloper].filter(Boolean),
            gamePublisher: Array.isArray(body.gamePublisher)
                ? body.gamePublisher
                : [body.gamePublisher].filter(Boolean),
            gamePlatform: Array.isArray(body.gamePlatform)
                ? body.gamePlatform
                : [body.gamePlatform].filter(Boolean),
            gameReleaseDate: body.gameReleaseDate,
            gameKoreanSubtitle: body.gameKoreanSubtitle,
            gameKoreanVoice: body.gameKoreanVoice,

            // multer 파일 처리
            gameImage: files?.gameImage?.[0]
                ? {
                    filename: files.gameImage[0].originalname,
                    mimetype: files.gameImage[0].mimetype,
                    size: files.gameImage[0].size,
                    path: files.gameImage[0].path,
                }
                : null,

            gameVideo: files?.gameVideo?.[0]
                ? {
                    filename: files.gameVideo[0].originalname,
                    mimetype: files.gameVideo[0].mimetype,
                    size: files.gameVideo[0].size,
                    path: files.gameVideo[0].path,
                }
                : null,

            gameDescription: body.gameDescription,
        };
    };

const gameData = (gameList) => {
    const gamePath = gameList.gameImage.filename.replace(/\.[^/.]+$/, "")
    return {
        gameTitle: gameList.gameTitle,
        gameSubTitle: gameList.gameSubTitle,
        gameGenre: Array.isArray(gameList.gameGenre)
            ? gameList.gameGenre
            : gameList.gameGenre ? [gameList.gameGenre] : [],
        gameDeveloper: Array.isArray(gameList.gameDeveloper)
            ? gameList.gameDeveloper
            : gameList.gameDeveloper ? [gameList.gameDeveloper] : [],
        gamePublisher: Array.isArray(gameList.gamePublisher)
            ? gameList.gamePublisher
            : gameList.gamePublisher ? [gameList.gamePublisher] : [],
        gamePlatform: Array.isArray(gameList.gamePlatform)
            ? gameList.gamePlatform
            : gameList.gamePlatform ? [gameList.gamePlatform] : [],
        gameReleaseDate: gameList.gameReleaseDate,
        gameKoreanSubtitle: gameList.gameKoreanSubtitle,
        gameKoreanVoice: gameList.gameKoreanVoice,
        gamePath: `/${gamePath}`,

        //  이미지를 URL만 저장
        gameImage: gameList?.gameImage?.filename
            ? `${process.env.BASE_URI}/img/${gameList.gameImage.filename}`
            : null,

        //  영상를 URL만 저장
        gameVideo: gameList?.gameVideo?.filename
            ? `${process.env.BASE_URI}/video/${gameList.gameVideo?.filename}`
            : null,

        gameDescription: gameList.gameDescription,
    }
};

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

};

