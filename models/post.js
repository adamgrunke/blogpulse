'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    models.post.belongsTo(models.author); // linked to the 1:M relationship to the authors model. 
    models.post.hasMany(models.comment);
    models.post.belongsToMany(models.tag, {through: 'postsTags'});
    

  };
  return post;
};