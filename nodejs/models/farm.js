const Client = require("./client.js");
const Employee = require("./employee.js");
const Field = require("./field.js");
const sequelize = require("../db/db-connection.js");
const { DataTypes } = require("sequelize");

//Table 'farm'
const Farm = sequelize.define(
  "Farm",
  {
    farm_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    farm_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    farm_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Client,
        key: "client_id",
      },
    },
  },
  { sequelize, modelName: "Farm", tableName: "farm", timestamps: false }
);

Farm.hasMany(Employee, {
  foreignKey: {
    name: "farm_id",
    allowNull: false,
  },
});
Employee.belongsTo(Farm, {
  foreignKey: {
    name: "farm_id",
    allowNull: false,
  },
});

Farm.hasMany(Field, {
  foreignKey: {
    name: "farm_id",
    allowNull: false,
  },
});
Field.belongsTo(Farm, {
  foreignKey: {
    name: "farm_id",
    allowNull: false,
  },
});

module.exports = Farm;
