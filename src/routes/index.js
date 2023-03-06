const express = require('express');
const login = require('../controllers/login');
const user = require('../controllers/users');
const category = require('../controllers/category');

const validateInputs = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const apiRoutes = express.Router();

apiRoutes.post('/login', login);
apiRoutes.post('/user', validateInputs, user.createUser);
apiRoutes.get('/user', validateToken, user.getUsers);
apiRoutes.get('/user/:id', validateToken, user.getUserById);
apiRoutes.post('/categories', validateToken, category.createCategory);

module.exports = apiRoutes;