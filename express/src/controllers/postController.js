"use strict";

// 사용자 모델과 bcrypt 라이브러리를 요청
const PostList = require("../models/postList/postList");
const { PostDto } = require("../dto/Post.dto");
const postRepository = require("../Repositories/Post.repository");

module.exports = {
    getPostList: async (req, res, next) => {
        const postList = await postRepository.findAllPostList(req.params.slug);
        return res.json(postList);
    },

    writePost: async (req, res, next) => {
        const post = new PostDto(req);
        const result = await postRepository.create(post);
        return res.json(result);
    },

    getPostData: async (req, res, next) => {
        const slug = req.params.slug;
        const postNum = req.params.post
        const postData = await postRepository.findPostData(slug, postNum);
        return res.json(postData);
    },

    modifyPost: async (req, res, next) => {
        const slug = req.body.slug;
        const postNum = req.body.postNum;
        const postDescription = req.body.postDescription;
        const result = await postRepository.modifyPost(slug, postNum, postDescription);
        return res.json(result);
    }
}