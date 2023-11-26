'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flight.init({
    airlane_name: DataTypes.STRING,
    route: DataTypes.STRING,
    departure_time: DataTypes.STRING,
    time_of_arrival: DataTypes.STRING,
    class: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};