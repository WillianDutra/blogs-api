const { BlogPostService, PostCategoryService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.data;

    const { dataValues } = await BlogPostService.createPost({ title, content, userId: id });
    categoryIds.map(async (categoryId) => PostCategoryService
      .createPostCategory({ postId: dataValues.id, categoryId }));

    return res.status(201).json(dataValues);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost };