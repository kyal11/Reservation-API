'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boking.init({
    user_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'boking',
  });
  return boking;
};