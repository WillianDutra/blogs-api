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

const editBlogPost = ({ title, content, id }) => BlogPost
  .update({ title, content }, { where: { id } })
  .then(() => getPostById(id));

const createPost = ({ title, content, userId }) => BlogPost
  .create({ title, content, userId });

const deletePost = (id) => BlogPost.destroy({ where: { id } });

module.exports = { getPosts, getPostById, editBlogPost, createPost, deletePost };