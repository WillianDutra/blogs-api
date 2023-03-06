const { BlogPost } = require('../models');

const createPost = ({ title, content, userId }) => BlogPost
  .create({ title, content, userId });

module.exports = { createPost };