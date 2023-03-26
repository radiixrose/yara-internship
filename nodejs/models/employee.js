const sequelize = require('../db/db-connection.js');
const { DataTypes } = require('sequelize');

//Table 'employee'
const Employee = sequelize.define('Employee', {
	employee_id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	employee_firstname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	employee_lastname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	employee_position: {
		type: DataTypes.STRING,
		allowNull: false
	},
	farm_id:{
		type: DataTypes.INTEGER,
		references: {
			model: 'Farm',
			key:'farm_id'
		}
	}
}, {sequelize,
	modelName: 'Employee',
	tableName: 'employee', 
timestamps: false});

module.exports = Employee;