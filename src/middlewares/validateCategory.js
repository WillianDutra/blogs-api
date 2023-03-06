const { CategoryService } = require('../services');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const categoryCount = await Promise.all(
    categoryIds.map(async (category) => {
      const { count } = await CategoryService.validateIds(category);
      return count;
    }),
  );

  if (categoryCount.includes(0)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};