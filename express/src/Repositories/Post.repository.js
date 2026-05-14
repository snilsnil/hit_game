const PostList = require("../models/postList/postList");

class PostRepository {
    async findAllPostList(slug) {
        try {
            const getPostListData = await PostList.find({ postGame: slug }, 'postNum postTitle postView poster postDate createdAt updatedAt')
            return ({
                message: "게시글 리스트를 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getPostListData
            })
        } catch (error) {
            console.log(`Error findAll postlist : ${error.message}`)
            return ({
                message: "게시글 리스트를 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }

    async create(post) {
        try {
            const getWritePost = await PostList.create(post)
            return ({
                message: "게시글을 성공적으로 작성했습니다.",
                statusCode: 200,
            })
        } catch (error) {
            console.log(`Error create post : ${error.message}`)
            return ({
                message: "게시글을 작성하는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }

    async findPostData(slug, postNum) {
        try {
            const getPost = await PostList.findOneAndUpdate({ postGame: slug, postNum: postNum },
                { $inc: { postView: 1 } },  // 2. view 필드를 1만큼 증가 ($inc 사용)
                { new: true },)
            return ({
                message: "게시글을 성공적으로 가져왔습니다.",
                statusCode: 200,
                data: getPost
            })
        } catch (error) {
            console.log(`Error increaseViewer postData : ${error.message}`)
            return ({
                message: "게시글을 가져오는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }

    async modifyPost(slug, postNum, postDescription) {
        try {
            const getPost = await PostList.findOneAndUpdate({ postGame: slug, postNum: postNum },
                { postDescription: postDescription },)
            return ({
                message: "게시글을 성공적으로 수정되었습니다..",
                statusCode: 200,
            })
        } catch (error) {
            console.log(`Error modify postData : ${error.message}`)
            return ({
                message: "게시글을 수정하는 도중 오류가 발생했습니다.",
                statusCode: 500
            })
        }
    }
}

module.exports = new PostRepository();