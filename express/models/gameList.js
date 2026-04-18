// models/User.js
"use strict";

/**
 * Listing 18.1 (p. 259)
 * user.js에서 사용자 모델 생성
 */

/**
 * 노트: Mongoose Schema 객체에서 객체 소멸(object destruct)의 사용에 주목하자.
 * {Schema}는 Mongoose의 Schema 객체를 동일한 이름의 상수로 할당한다. 나중에 이
 * 새로운 형식을 다른 모델에 적용할 것이다.
 */
const mongoose = require("mongoose"),
    bcrypt = require("bcryptjs"),
    { Schema } = mongoose,
    gameListSchema = Schema(
        // 사용자 스키마 생성
        {
            gameNum: {
                type: Number,
                unique: true,
                trim: true
            },
            gameTitle: {
                type: String,
                required: true,
                trim: true,
            },
            gameSubTitle: {
                type: String,
                required: true,
                trim: true,
            },

            gameDeveloper: {
                type: String,
                required: true,
                trim: true,
            },
            gamePublisher: {
                type: String,
                required: true,
                trim: true,
            },
            gamePlatform: [{
                type: String,
                required: true,
                trim: true,
            }],
            gameReleaseDate: {
                type: String,
                required: true,
                trim: true,
            },
            gameKoreanSubtitle: {
                type: String,
                required: true,
                trim: true,
            },
            gameKoreanVoice: {
                type: String,
                required: true,
                trim: true,
            },
            gamePath: {
                type: String,
                required: true,
                trim: true,
                unique: true,
            },
            gameImage: {
                type: String,
                required: true,
                trim: true,
            },
            gameVideo: {
                type: String,
                required: true,
                trim: true,
            },
            gameDescription: {
                type: String,
                required: true,
                trim: true,
            },
        },
        {
            timestamps: true, // timestamps 속성을 추가해 createdAt 및 updatedAt 시간 기록
        }
    );

module.exports = mongoose.model("GameList", gameListSchema);
