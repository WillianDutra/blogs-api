const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const category = await CategoryService.createCategory({ name });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message, name: req.body.name });
  }
};

module.exports = { createCategory };