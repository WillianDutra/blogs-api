const { User } = require('../models');

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });
const getUserById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });
const getUserByEmail = (email) => User.findOne({ where: { email } });
const createUser = ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  deleteUser,
};