'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    author: DataTypes.STRING,
    comment: DataTypes.STRING,
    postId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.post.hasMany(models.comment);
    models.comment.belongsTo(models.post);
  };
  return comment;
};