const app = require('./config.js');

const employeeService = require('../service/employee-service.js');

app.get('/employee', (req, res) => {
  employeeService.findAll().then(result => {
    res.send(result);
  })
});

app.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  employeeService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/employee', (req, res) => {
  const emp = req.body;
  employeeService.createEmployee(emp).then(result => {
    res.send(result);
  });
})

app.put('/employee', (req, res) => {
  const emp = req.body;
  employeeService.updateEmployee(emp).then(result => {
    res.send(result);
  });
})

app.delete('/employee/:id', (req, res) => {
  const id = req.params.id;
  employeeService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;