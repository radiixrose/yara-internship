const dbConfig = require('./db.config.js');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operationsAliases: false,
	pool: {
	max: dbConfig.pool.max,
	min: dbConfig.pool.min,
	acquire: dbConfig.pool.acquire,
	idle: dbConfig.pool.idle
	}
});

// You can use the .authenticate() function to test if the connection is OK
async function testConnection() {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  } catch (error) {
  console.error('Unable to connect to the database:', error);
  };
};
testConnection();

//A.hasOne(B); -> 1:1
//A.belongsTo(B); -> M:1
//A.hasMany(B); -> 1:M
//A.belongsToMany(B, { through: 'C' }); -> M:M

module.exports = sequelize;




