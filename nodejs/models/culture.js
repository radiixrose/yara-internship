const History = require('./history.js');
const sequelize = require('../db/db-connection.js');
const { DataTypes } = require('sequelize');

//Table 'culture'
const Culture = sequelize.define('Culture', {
	culture_id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	culture_name: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {sequelize,
	modelName: 'Culture',
	tableName: 'culture', 
timestamps:false});

Culture.hasMany(History, {
  foreignKey: {
    name: 'culture_id',
    allowNull: false
  }
});
History.belongsTo(Culture, {
  foreignKey: {
    name: 'culture_id',
    allowNull: false
  }
});

module.exports = Culture;