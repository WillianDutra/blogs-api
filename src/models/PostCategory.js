module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories'
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
        as: 'post',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      })


    models.BlogPost.belongsToMany(models.Category,{
        as: 'category',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
  };

  return PostCategory;
};