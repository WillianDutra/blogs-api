const { User } = require('../models');

const getUsers = () => User.findAll();
const getUserById = (id) => User.findByPk({ where: { id } });
const getUserByEmail = (email) => User.findOne({ where: { email } });
const createUser = ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
};