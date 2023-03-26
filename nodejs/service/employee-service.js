const Employee = require("../models/employee.js");
const { Op } = require("sequelize");

async function findAll() {
  const result = await Employee.findAll();
  return result;
}

async function findById(employee_id) {
  return await Employee.findAll({
    where: {
      employee_id: {
        [Op.eq]: employee_id
      }
    }
  })
}

async function createEmployee(employee){
  return await Employee.create({employee_firstname: employee.employee_firstname, employee_lastname: employee.employee_lastname, employee_position: employee.employee_position}, {
    where: {
      employee_id: {
        [Op.eq]: employee.employee_id
      }
    }
  })
}

async function updateEmployee(employee) {
  return await Employee.update({employee_firstname: employee.employee_firstname, employee_lastname: employee.employee_lastname, employee_position: employee.employee_position}, {
    where: {
      employee_id: {
        [Op.eq]: employee.employee_id
      }
    }
  })
}

async function deleteById(employee_id){
  return await Employee.destroy({
    where: {
      employee_id: {
        [Op.eq]: employee_id
      }
    }
  }
  )
}

module.exports = {findAll, findById, createEmployee, updateEmployee, deleteById};