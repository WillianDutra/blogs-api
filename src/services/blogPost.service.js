const { BlogPost, User, Category } = require('../models');

const getPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
});

const getPostById = (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
});

const createPost = ({ title, content, userId }) => BlogPost
  .create({ title, content, userId });

module.exports = { getPosts, getPostById, createPost };