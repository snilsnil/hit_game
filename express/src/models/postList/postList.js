// models/User.js
"use strict";

const mongoose = require("mongoose"),
    CounterPostNum = require("./counterPostNum"),
    { Schema } = mongoose,
    postListSchema = Schema(
        // 사용자 스키마 생성
        {
            postGame: {
                type: String,
                required: true,
                trim: true,
            },

            postNum: {
                type: Number,
            },
            postTitle: {
                type: String,
                required: true,
                trim: true,
            },
            poster: {
                type: String,
                required: true,
                trim: true,
            },
            postView: {
                type: Number,
                required: true,
                trim: true,
            },
            postDescription: {
                type: String,
                required: true,
                trim: true,
            },
        },
        {
            timestamps: true, // timestamps 속성을 추가해 createdAt 및 updatedAt 시간 기록
        }
    );


// 핵심: 특정 게임 타이틀 내에서 gameNum이 중복되는 것을 방지
postListSchema.index({ postGame: 1, postNum: 1 }, { unique: true });

postListSchema.pre('save', async function (next) {
    // 새 글이 작성될 때만 번호 할당
    if (!this.isNew) return next();

    try {
        const counter = await CounterPostNum.findOneAndUpdate(
            // 고정된 문자열 대신 현재 게시글의 gameTitle을 키로 사용
            { _id: this.postGame },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        // 생성된 시퀀스 번호를 gameNum에 할당
        this.postNum = counter.seq;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("PostList", postListSchema);
