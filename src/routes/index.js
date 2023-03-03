const express = require('express');
const login = require('../controllers/login');
const user = require('../controllers/users');

const validateInputs = require('../middlewares/validateNewUser');

const apiRoutes = express.Router();

apiRoutes.post('/login', login);
apiRoutes.post('/user', validateInputs, user.createUser);

module.exports = apiRoutes;