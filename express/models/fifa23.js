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
  { Schema } = mongoose,
  userSchema = Schema(
    // 사용자 스키마 생성
    {
      textNum: {
        type: Number,
        required: true,
        unique: true,
      },
      id: {
        // name 속성에 이름(first)과 성(last) 추가
        type: String,
        required: true,
        trim: true
      },
      textTitle: {
        type: String,
        required: true,
      },
      textContent: {
        type: String,
        required: true,
      },
      textViewer: {
        type: Number,
        required: true,
      },
      textView: {
        type: Boolean,
        required: true,
      },
      create: {
        type: Date,
        requireed: true
      },
      update: {
        type: Date
      }
    },
  );




module.exports = mongoose.model("fifa23", userSchema);

/**
 * 노트: 이 책을 쓰는 시점에는 Mongoose 훅에서 화살표 함수는 작동하지 않는다.
 */
