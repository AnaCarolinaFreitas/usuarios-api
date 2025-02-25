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

    getPostsById(id) {
        const post = this.posts.find(post => post.id == id);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }

    updatePostById(id, updateData) {
        const post = this.getPostsById(id);
        Object.assign(post, updateData);
        return post;
    }

    deletePostById(id) {
        this.posts = this.posts.filter(post => post.id != id);
    }
}
module.exports = PostList;