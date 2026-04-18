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
  userSchema = Schema(
    // 사용자 스키마 생성
    {
      id: {
        // name 속성에 이름(first)과 성(last) 추가
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
      },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
        required: true,
      },
    },
    {
      timestamps: true, // timestamps 속성을 추가해 createdAt 및 updatedAt 시간 기록
    }
  );

userSchema.pre("save", function (next) {
  let user = this; // 콜백에서 함수 키워드 사용

  bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
      next();
    })
    .catch(error => {
      console.log(`Error in hashing password: ${error.message}`);
      next(error);
    });
});

module.exports = mongoose.model("User", userSchema);

/**
 * 노트: 이 책을 쓰는 시점에는 Mongoose 훅에서 화살표 함수는 작동하지 않는다.
 */
