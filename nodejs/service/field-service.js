const Field = require("../models/field.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await Field.findAll();
  return result;
}

async function findById(field_id) {
  return await Field.findAll({
    where: {
      field_id: {
        [Op.eq]: field_id
      }
    }
  })
}

async function createField(field){
  return await Field.create({borders: field.borders}, {
    where: {
      field_id: {
        [Op.eq]: field.field_id
      }
    }
  })
}

async function updateField(field) {
  return await Field.update({borders: field.borders}, {
    where: {
      field_id: {
        [Op.eq]: field.field_id
      }
    }
  })
}

async function deleteById(field_id){
  return await Field.destroy({
    where: {
      field_id: {
        [Op.eq]: field_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createField, updateField, deleteById};