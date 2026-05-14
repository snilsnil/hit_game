"use strict"

const mongoose = require("mongoose"),
    { Schema } = mongoose,
    counterGameNumSchema = Schema(
        {
            _id: {
                type: String, required: true
            },
            seq: {
                type: Number,
                default: 0,
            }
        }
    );

module.exports = mongoose.model("CounterGameNum", counterGameNumSchema)