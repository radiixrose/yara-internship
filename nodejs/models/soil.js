const History = require('./history.js');
const sequelize = require('../db/db-connection.js');
const { DataTypes } = require('sequelize');

//Table 'soil'
const Soil = sequelize.define('Soil', {
	soil_id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	soil_type: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {sequelize,
	modelName: 'Soil',
	tableName: 'soil',
timestamps:false});

Soil.hasMany(History, {
  foreignKey: {
    name: 'soil_id',
    allowNull: false
  }
});
History.belongsTo(Soil, {
  foreignKey: {
    name: 'soil_id',
    allowNull: false
  }
});

module.exports = Soil;