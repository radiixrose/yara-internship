const app = require('./config.js');

const fieldService = require('../service/field-service.js');

app.get('/field', (req, res) => {
  fieldService.findAll().then(result => {
    res.send(result);
  })
});

app.get('/field/:id', (req, res) => {
  const id = req.params.id;
  fieldService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/field', (req, res) => {
  const field = req.body;
  fieldService.createField(field).then(result => {
    res.send(result);
  });
})

app.put('/field', (req, res) => {
  const field = req.body;
  fieldService.updateField(field).then(result => {
    res.send(result);
  });
})

app.delete('/field/:id', (req, res) => {
  const id = req.params.id;
  fieldService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;