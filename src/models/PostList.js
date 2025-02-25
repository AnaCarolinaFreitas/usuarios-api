class PostList {
    constructor() {
        this.posts = [];
        this.users = [];
    }

    addPostByUserId(post) {
        const user = this.users.find(user => user.id == post.UserId);
        if (!post) {
            throw new Error('User not found');
        }
        this.posts.push(post);
    }

    getPostsByUserId(UserId) {
        const posts = this.posts.filter(post => post.UserId == UserId);
        if (!posts) {
            throw new Error('Post not found');
        }
        return posts;
    }

}
module.exports = PostList;