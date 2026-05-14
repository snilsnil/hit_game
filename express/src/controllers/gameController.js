"use strict";
// 게임 리스트 모델 요청
const GameList = require("../models/gameList/gameList");
const { GameListDto, GameDto, ModifyGameDto } = require('../dto/GameList.dto')
const gameListRepository = require("../Repositories/GameList.repository")

/**
 * 게임을 추가하는 메서드
 */

module.exports = {
    createGame: async (req, res, next) => {
        const gameList = new GameListDto(req.body, req.files);

        const game = new GameDto(gameList);

        const result = await gameListRepository.createGame(game);
        return res.json(result);
    },

    modifyGame: async (req, res, next) => {

        const gamePath = "/" + req.params.slug
        const gameData = new ModifyGameDto(req.body)

        const result = await gameListRepository.modifyGame(gamePath, gameData);
        return res.json(result);
    },

    getGameList: async (req, res, next) => {
        const result = await gameListRepository.getGameList();
        return res.json(result);
    },

    getSimpleGameList: async (req, res, next) => {
        const result = await gameListRepository.getSimpleGameList();
        return res.json(result);

    },

    getGameData: async (req, res, next) => {
        const slug = req.params.slug;
        const result = await gameListRepository.getGameData(slug);
        return res.json(result);
    },

};

