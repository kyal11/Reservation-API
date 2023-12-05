'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.boking,{
        foreignKey: "user_id"
      })
      User.hasMany(models.user_role,{
        foreignKey: "user_id"
      })
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