const Farm = require("./farm.js");
const sequelize = require("../db/db-connection.js");
const { DataTypes } = require("sequelize");

//Table 'client'
const Client = sequelize.define(
  "Client",
  {
    client_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    client_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Client", tableName: "client", timestamps: false }
);

Client.hasMany(Farm, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});
Farm.belongsTo(Client, {
  foreignKey: {
    name: "client_id",
    allowNull: false,
  },
});

module.exports = Client;
