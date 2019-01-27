const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  slug: String,
  name: String
}); 

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;