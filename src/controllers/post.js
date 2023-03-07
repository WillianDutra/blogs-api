const { BlogPostService, PostCategoryService } = require('../services');

const getPosts = async (_req, res) => {
  try {
    const posts = await BlogPostService.getPosts();
    
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPostService.getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
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

module.exports = { getPosts, getPostById, createPost };