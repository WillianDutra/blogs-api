const { BlogPostService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.data.id;

  const { dataValues } = await BlogPostService.getPostById(id);

  if (dataValues.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};