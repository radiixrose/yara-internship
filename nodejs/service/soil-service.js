const Soil = require("../models/soil.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await Soil.findAll();
  return result;
}

async function findById(soil_id) {
  return await Soil.findAll({
    where: {
      soil_id: {
        [Op.eq]: soil_id
      }
    }
  })
}

async function createSoil(soil){
  return await Soil.create({soil_type: soil.soil_type}, {
    where: {
      soil_id: {
        [Op.eq]: soil.soil_id
      }
    }
  })
}

async function updateSoil(soil) {
  return await Soil.update({soil_type: soil.soil_type}, {
    where: {
      soil_id: {
        [Op.eq]: soil.soil_id
      }
    }
  })
}

async function deleteById(soil_id){
  return await Soil.destroy({
    where: {
      soil_id: {
        [Op.eq]: soil_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createSoil, updateSoil, deleteById};