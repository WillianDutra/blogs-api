const { BlogPostService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPostService.getPostById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};