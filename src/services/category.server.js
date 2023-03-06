const { Category } = require('../models');

const getCategories = () => Category.findAll();
const getCategoryById = (id) => Category.findByPk(id);
const createCategory = ({ name }) => Category.create({ name });

module.exports = { getCategories, getCategoryById, createCategory };