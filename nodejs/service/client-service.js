const Client = require("../models/client.js");
const Farm = require("../models/farm.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await Client.findAll();
  return result;
}

async function findById(client_id) {
  return await Client.findAll({
    where: {
      client_id: {
        [Op.eq]: client_id,
      },
    },
  });
}

async function createClient(client) {
  if (!client.client_firstname || !client.client_lastname) {
    throw new Error("Client first name and last name are required");
  }
  return await Client.create(
    {
      client_firstname: client.client_firstname,
      client_lastname: client.client_lastname,
    },
    {
      where: {
        client_id: {
          [Op.eq]: client.client_id,
        },
      },
    }
  );
}

async function updateClient(client) {
  if (!client.client_firstname || !client.client_lastname) {
    throw new Error("Client first name and last name are required");
  }
  const result = await Client.update(
    {
      client_firstname: client.client_firstname,
      client_lastname: client.client_lastname,
    },
    {
      where: {
        client_id: {
          [Op.eq]: client.client_id,
        },
      },
    }
  );
  if (result[0] === 0) {
    console.error(`No row updated for client ID ${client.client_id}`);
  }
  return result;
}

async function deleteById(client_id) {
  // delete related farms first
  await Farm.destroy({
    where: {
      client_id: {
        [Op.eq]: client_id,
      },
    },
  });

  // delete client
  const result = await Client.destroy({
    where: {
      client_id: {
        [Op.eq]: client_id,
      },
    },
  });
  return result;
}

module.exports = { findAll, findById, createClient, updateClient, deleteById };
