const validateInputs = require('./validateNewUser');
const validateToken = require('./validateToken');
const validateNewPost = require('./validateNewPost');
const validateCategory = require('./validateCategory');
const validateEditPost = require('./validateEditPost');
const validateUser = require('./validateUser');
const validatePost = require('./validatePost');

module.exports = {
  validateInputs,
  validateToken,
  validateNewPost,
  validateCategory,
  validateEditPost,
  validateUser,
  validatePost };