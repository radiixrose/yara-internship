const sequelize = require('../db/db-connection.js');
const { DataTypes } = require('sequelize');

//Table 'field_history'
const History = sequelize.define('History', {
	history_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
    primaryKey: true
	},
	year: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	culture_id:{
		type: DataTypes.INTEGER,
		references: {
			model: 'Culture',
			key:'culture_id'
		}
	},
	soil_id:{
		type: DataTypes.INTEGER,
		references: {
			model: 'Soil',
			key:'soil_id'
		}
	},
	field_id:{
		type: DataTypes.INTEGER,
		references: {
			model: 'Field',
			key:'field_id'
		}
	}
}, {sequelize,
	modelName: 'History',
	tableName: 'field_history', 
timestamps:false});

module.exports = History;