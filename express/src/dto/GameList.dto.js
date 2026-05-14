class GameListDto {
    constructor(body, files) {
        this.gameTitle = body.gameTitle;
        this.gameSubTitle = body.gameSubTitle;
        this.gameGenre = Array.isArray(body.gameGenre)
            ? body.gameGenre
            : [body.gameGenre].filter(Boolean);
        this.gameDeveloper = Array.isArray(body.gameDeveloper)
            ? body.gameDeveloper
            : [body.gameDeveloper].filter(Boolean);
        this.gamePublisher = Array.isArray(body.gamePublisher)
            ? body.gamePublisher
            : [body.gamePublisher].filter(Boolean);
        this.gamePlatform = Array.isArray(body.gamePlatform)
            ? body.gamePlatform
            : [body.gamePlatform].filter(Boolean);
        this.gameReleaseDate = body.gameReleaseDate;
        this.gameKoreanSubtitle = body.gameKoreanSubtitle;
        this.gameKoreanVoice = body.gameKoreanVoice;
        this.gamePath = body.gamePath;

        // multer 파일 처리
        this.gameImage = files?.gameImage?.[0]
            ? {
                filename: files.gameImage[0].originalname,
                mimetype: files.gameImage[0].mimetype,
                size: files.gameImage[0].size,
                path: files.gameImage[0].path,
            }
            : null;

        this.gameVideo = files?.gameVideo?.[0]
            ? {
                filename: files.gameVideo[0].originalname,
                mimetype: files.gameVideo[0].mimetype,
                size: files.gameVideo[0].size,
                path: files.gameVideo[0].path,
            }
            : null;

        this.gameDescription = body.gameDescription;
    }
}

class GameDto {
    constructor(body) {
        this.gameTitle = body.gameTitle;
        this.gameSubTitle = body.gameSubTitle;
        this.gameGenre = Array.isArray(body.gameGenre)
            ? body.gameGenre
            : [body.gameGenre].filter(Boolean);
        this.gameDeveloper = Array.isArray(body.gameDeveloper)
            ? body.gameDeveloper
            : [body.gameDeveloper].filter(Boolean);
        this.gamePublisher = Array.isArray(body.gamePublisher)
            ? body.gamePublisher
            : [body.gamePublisher].filter(Boolean);
        this.gamePlatform = Array.isArray(body.gamePlatform)
            ? body.gamePlatform
            : [body.gamePlatform].filter(Boolean);
        this.gameReleaseDate = body.gameReleaseDate;
        this.gameKoreanSubtitle = body.gameKoreanSubtitle;
        this.gameKoreanVoice = body.gameKoreanVoice;
        this.gamePath = body.gamePath;

        //  이미지를 URL만 저장
        this.gameImage = body?.gameImage?.filename
            ? `${process.env.BASE_URI}/img/${body.gameImage.filename}`
            : null,

            //  영상를 URL만 저장
            this.gameVideo = body?.gameVideo?.filename
                ? `${process.env.BASE_URI}/video/${body.gameVideo.filename}`
                : null,

            this.gameDescription = body.gameDescription;
    }
}

class ModifyGameDto {
    constructor(body) {
        const data = { ...body }
        let modifiedData = {}
        Object.entries(data).forEach(([key, value]) => {
            modifiedData[key] = value
        })

        return modifiedData
    }

}

module.exports = { GameListDto, GameDto, ModifyGameDto }