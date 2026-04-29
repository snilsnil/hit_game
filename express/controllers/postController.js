"use strict";

// 사용자 모델과 bcrypt 라이브러리를 요청
const PostList = require("../models/postList/postList");
const postData = (req) => {
    return {
        postGame: req.params.slug,
        postTitle: req.body.postTitle,
        poster: req.body.poster,
        postView: 0,
        postDescription: req.body.postDescription,
    }
};

module.exports = {
    getPostList: async (req, res, next) => {
        try {
            const getPostListData = await PostList.find({ postGame: req.params.slug }, 'postNum postTitle postView poster postDate createdAt updatedAt')
            return res.json({
                message: "게시글 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getPostListData
            })
        } catch (error) {
            console.log(`Error findAll postlist : ${error.message}`)
            return res.json({
                message: "게임 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    },

    writePost: async (req, res, next) => {
        const post = postData(req)

        try {
            const getWritePost = await PostList.create(post)
            return res.json({
                message: "게시글을 성공적으로 작성했습니다.",
                statusCode: 200,
            })
        } catch (error) {
            console.log(`Error create post : ${error.message}`)
            return res.json({
                message: "게시글을 작성하는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }
}