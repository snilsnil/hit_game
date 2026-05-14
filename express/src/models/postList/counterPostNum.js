"use strict"

const mongoose = require("mongoose"),
    { Schema } = mongoose,
    counterPostNumSchema = Schema(
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

module.exports = mongoose.model("CounterPostNum", counterPostNumSchema)