import Posts from "./Models/Posts.js";

class PostsController {
    constructor() {
        this.posts = new Posts();
        this._renderSomePosts();
    }

    async _renderSomePosts() {
        try {
            for (let i = 1; i <= 10; i++) {
                let post = await this._getPost(i);
                this._renderPost(post);
            }
        } catch (e) {
            console.log("Error loading post.");
        }
    }

    _renderPost(post) {
        $(".posts").append(`<p>${post.body}</p>`);
    }

    _getPost(id) {
        return this.posts.getPost(id);
    }
}

export default PostsController;