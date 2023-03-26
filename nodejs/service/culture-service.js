const Culture = require("../models/culture.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await Culture.findAll();
  return result;
}

async function findById(culture_id) {
  return await Farm.findAll({
    where: {
      culture_id: {
        [Op.eq]: culture_id
      }
    }
  })
}

async function createCulture(culture){
  return await Culture.create({culture_name: culture.culture_name}, {
    where: {
      culture_id: {
        [Op.eq]: culture.culture_id
      }
    }
  })
}

async function updateCulture(culture) {
  return await Culture.update({culture_name: culture.culture_name}, {
    where: {
      culture_id: {
        [Op.eq]: culture.culture_id
      }
    }
  })
}

async function deleteById(culture_id){
  return await Culture.destroy({
    where: {
      culture_id: {
        [Op.eq]: culture_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createCulture, updateCulture, deleteById};