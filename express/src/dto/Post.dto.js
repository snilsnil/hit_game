class PostDto {
    constructor(req) {
        this.postGame = req.params.slug;
        this.postTitle = req.body.postTitle;
        this.poster = req.body.poster;
        this.postView = 0;
        this.postDescription = req.body.postDescription;
    }
}
module.exports = { PostDto }