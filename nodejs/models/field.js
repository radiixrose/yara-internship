const History = require('./history.js');
const Farm = require('./farm.js');
const sequelize = require('../db/db-connection.js');
const { DataTypes } = require('sequelize');
//Table 'field'
const Field = sequelize.define('Field', {
  field_id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  borders: {
    type: DataTypes.STRING,
    allowNull: false
  },
  farm_id:{
    type: DataTypes.INTEGER,
    references: {
      model: Farm,
      key:'farm_id'
    }
  }
}, {sequelize,
  modelName: 'Field',
  tableName: 'field', 
  timestamps: false});

Field.hasMany(History, {
  foreignKey: {
    name: 'field_id',
    allowNull: false
  }
});
History.belongsTo(Field, {
  foreignKey: {
    name: 'field_id',
    allowNull: false
  }
});

module.exports = Field;