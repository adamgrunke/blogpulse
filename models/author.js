'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    name: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.post); // added this line to define the 1:M (one to many) relationship.
  };
  return author;
};