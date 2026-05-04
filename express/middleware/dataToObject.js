module.exports = {
    getGameListParams: (body, files) => {
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
            gamePath: body.gamePath,

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
    },

    gameData: (gameList) => {
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
            gamePath: gameList.gamePath,

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
    },

    getModifyData: (body) => {
        const data = { ...body }
        let modifiedData = {}
        Object.entries(data).forEach(([key, value]) => {
            modifiedData[key] = value
        })

        return modifiedData
    },

}