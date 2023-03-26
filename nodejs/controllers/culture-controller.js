const app = require('./config.js');

const cultureService = require('../service/culture-service.js');

app.get('/culture', (req, res) => {
  cultureService.findAll().then(result => {
    res.send(result);
  })
});

app.get('/culture/:id', (req, res) => {
  const id = req.params.id;
  cultureService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/culture', (req, res) => {
  const culture = req.body;
  cultureService.createCulture(culture).then(result => {
    res.send(result);
  });
})

app.put('/culture', (req, res) => {
  const culture = req.body;
  cultureService.updateCulture(culture).then(result => {
    res.send(result);
  });
})

app.delete('/culture/:id', (req, res) => {
  const id = req.params.id;
  cultureService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;