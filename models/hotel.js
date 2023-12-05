'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hotel.hasMany(models.boking,{
        foreignKey: "hotel_id"
      })
    }
  }
  hotel.init({
    name: DataTypes.STRING,
    domicile: DataTypes.STRING,
    address: DataTypes.STRING,
    facility: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};