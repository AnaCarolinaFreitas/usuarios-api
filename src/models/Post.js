const {v4: uuid4} = require('uuid');
const User = require('./User');

class Post {
    constructor({user, title, content, image}) {
        this.id = uuid4();
        this.UserId = User.id;
        this.title = title;
        this.content = content;
        this.image = image;
    }
}

module.exports = Post;