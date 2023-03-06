const { Category } = require('../models');

const getCategories = () => Category.findAll();
const getCategoryById = (id) => Category.findByPk(id);
const createCategory = ({ name }) => Category.create({ name });

const validateIds = (category) => Category.findAndCountAll({
  where: { id: category }, limit: 1, offset: 0,
});

module.exports = { getCategories, getCategoryById, createCategory, validateIds };