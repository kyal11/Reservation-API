'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    image_url:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};