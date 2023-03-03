const { User } = require('../models');

const getUsers = () => User.findAll();
const getUserById = (id) => User.findByPk({ where: { id } });
const getUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
};