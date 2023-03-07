const { BlogPostService, PostCategoryService } = require('../services');

const getPosts = async (_req, res) => {
  try {
    const posts = await BlogPostService.getPosts();
    
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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

module.exports = { getPosts, createPost };