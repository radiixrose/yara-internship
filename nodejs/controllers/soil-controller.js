const app = require('./config.js');

const soilService = require('../service/soil-service.js');

app.get('/soil', (req, res) => {
    soilService.findAll().then(result => {
      res.send(result);
  });
});

app.get('/soil/:id', (req, res) => {
  const id = req.params.id;
  soilService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/soil', (req, res) => {
  const soil = req.body;
  soilService.createSoil(soil).then(result => {
    res.send(result);
  });
})

app.put('/soil', (req, res) => {
  const soil = req.body;
  soilService.updateSoil(soil).then(result => {
    res.send(result);
  });
})

app.delete('/soil/:id', (req, res) => {
  const id = req.params.id;
  soilService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;