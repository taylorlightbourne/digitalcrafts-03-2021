'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Associations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Associations.init({
    Doctor: DataTypes.STRING,
    Patient: DataTypes.STRING,
    Appointment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Associations',
  });
  return Associations;
};