const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  slug: String,
  title: String,
  content: String,
  author: String,
  category: Array
}); 

const Post = mongoose.model('Post', postSchema);

module.exports = Post;