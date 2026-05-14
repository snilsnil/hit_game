const GameList = require("../models/gameList/gameList");

class GameListRepository {

    async createGame(gameData) {
        try {
            const createGameData = await GameList.create(gameData);
            return ({
                message: "게임 추가를 성공적으로 완료되었습니다."
                ,
                statusCode: 200
            });
        } catch (error) {
            console.log(`Error creating game: ${error.message}`);
            if (error.keyValue && error.keyValue.gamePath) {
                return ({
                    message: "이미 존재하는 게임입니다.",
                    statusCode: 400
                });
            }
            return ({
                message: "게임 추가 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    }

    async modifyGame(gamePath, gameData) {
        try {
            const modifyGameData = await GameList.findOneAndUpdate({ gamePath: gamePath }, { $set: gameData });
            return ({
                message: "게임 추가를 성공적으로 완료되었습니다."
                ,
                statusCode: 200
            });
        } catch (error) {
            console.log(`Error creating game: ${error.message}`);
            if (error.keyValue && error.keyValue.gamePath) {
                return ({
                    message: "이미 존재하는 게임입니다.",
                    statusCode: 400
                });
            }
            return ({
                message: "게임 추가 중 오류가 발생했습니다.",
                statusCode: 500
            });
        }
    }

    async getGameList() {
        try {
            const getGameListData = await GameList.find({}, 'gameNum gameTitle gameSubTitle gameDeveloper gamePublisher gamePlatform gameReleaseDate gameKoreanSubtitle gameKoreanVoice gamePath')
            return ({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameListData
            })
        } catch (error) {
            console.log(`Error findAll game : ${error.message}`)
            return ({
                message: "게임 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }

    async getSimpleGameList() {
        try {
            const getGameListData = await GameList.find({}, 'gameNum gameTitle gameSubTitle gamePath gameImage gameDescription gameVideo')
            return ({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameListData
            })
        } catch (error) {
            console.log(`Error findAll game : ${error.message}`)
            return ({
                message: "게임 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }

    async getGameData(gamePath) {
        try {
            const getGameData = await GameList.findOne({ gamePath: '/' + gamePath });
            return ({
                message: "게임 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getGameData
            })
        } catch (error) {
            console.log(`Error findOne game : ${error.message}`)
            return ({
                message: "게임을 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }
}

module.exports = new GameListRepository();