const Farm = require("../models/farm.js");
const Client = require("../models/client.js")
const { Op } = require("sequelize");

async function findAll() {
  const result = await Farm.findAll();
  return result;
}

async function findById(farm_id) {
  return await Farm.findAll({
    where: {
      farm_id: {
        [Op.eq]: farm_id
      }
    }
  })
}

async function createFarm(farm){
  return await Farm.create({farm_name: farm.farm_name, farm_location: farm.farm_location, client_id: farm.client_id}, {
    where: {
      farm_id: {
        [Op.eq]: farm.farm_id
      },
      include: [
        { model: Client, as: 'ClientId' }
      ]
    }
  })
}

async function updateFarm(farm) {
  return await Farm.update({farm_name: farm.farm_name, farm_location: farm.farm_location, client_id: farm.client_id}, {
    where: {
      farm_id: {
        [Op.eq]: farm.farm_id
      },
      include: [
        { model: Client, as: 'ClientId' }
      ]
    }
  })
}

async function deleteById(farm_id){
  return await Farm.destroy({
    where: {
      farm_id: {
        [Op.eq]: farm_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createFarm, updateFarm, deleteById};