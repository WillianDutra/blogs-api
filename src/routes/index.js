const express = require('express');
const { login, user, category, post } = require('../controllers');

const {
  validateInputs, validateToken, 
  validateNewPost, validateCategory,
  validateEditPost, validateUser, validatePost,
} = require('../middlewares');

const apiRoutes = express.Router();

apiRoutes.post('/login', login);
apiRoutes.post('/user', validateInputs, user.createUser);
apiRoutes.get('/user', validateToken, user.getUsers);
apiRoutes.get('/user/:id', validateToken, user.getUserById);
apiRoutes.post('/categories', validateToken, category.createCategory);
apiRoutes.get('/categories', validateToken, category.getCategories);
apiRoutes.post('/post', validateToken, validateNewPost, validateCategory, post.createPost);
apiRoutes.get('/post', validateToken, post.getPosts);
apiRoutes.get('/post/:id', validateToken, post.getPostById);
apiRoutes.put('/post/:id', validateToken, validateEditPost, validateUser, post.editBlogPost);
apiRoutes.delete('/post/:id', validateToken, validatePost, validateUser, post.deletePost);
apiRoutes.delete('/user/me', validateToken, user.deleteUser);

module.exports = apiRoutes;