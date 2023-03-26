const app = require('./config.js');

const farmService = require('../service/farm-service.js');

app.get('/farm', (req, res) => {
  farmService.findAll().then(result => {
    res.send(result);
  })
});

app.get('/farm/:id', (req, res) => {
  const id = req.params.id;
  farmService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/farm', (req, res) => {
  const farm = req.body;
  farmService.createFarm(farm).then(result => {
    res.send(result);
  });
})

app.put('/farm', (req, res) => {
  const farm = req.body;
  farmService.updateFarm(farm).then(result => {
    res.send(result);
  });
})

app.delete('/farm/:id', (req, res) => {
  const id = req.params.id;
  farmService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;