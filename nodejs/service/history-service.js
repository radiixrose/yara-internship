const History = require("../models/history.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await History.findAll();
  return result;
}

//How to represent foreign keys
  async function findById(history_id) {
    return await History.findAll({
      where: {
        history_id: {
          [Op.eq]: history_id
        }
      }
    })
  }

async function createHistory(history){
  return await History.create({year: history.year}, {
    where: {
      history_id: {
        [Op.eq]: history.history_id
      }
    }
  })
}

async function updateHistory(history) {
  return await History.update({year: history.year}, {
    where: {
      history_id: {
        [Op.eq]: history.history_id
      }
    }
  })
}

async function deleteById(history_id){
  return await History.destroy({
    where: {
      history_id: {
        [Op.eq]: history_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createHistory, updateHistory, deleteById};