const express = require('express');
const { login, user, category, post } = require('../controllers');

const validateInputs = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');
const validateNewPost = require('../middlewares/validateNewPost');
const validateCategory = require('../middlewares/validateCategory');
const validateEditPost = require('../middlewares/validateEditPost');

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
apiRoutes.put('/post/:id', validateToken, validateEditPost, post.editBlogPost);

module.exports = apiRoutes;