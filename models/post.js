const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  htmlContent: { type: String, required: true },
  userId: { type: String, required: false },
});

module.exports = mongoose.model('Post', postSchema);