const app = require('./config.js');

const historyService = require('../service/history-service.js');

app.get('/history', (req, res) => {
     historyService.findAll().then(result => {
      res.send(result);
  })
});

app.get('/history/:id', (req, res) => {
  const id = req.params.id;
  historyService.findById(id).then(result => {
    res.send(result);
  })
});

app.post('/history', (req, res) => {
  const his = req.body;
  historyService.createHistory(his).then(result => {
    res.send(result);
  });
})

app.put('/history', (req, res) => {
  const his = req.body;
  historyService.updateHistory(his).then(result => {
    res.send(result);
  });
})

app.delete('/history/:id', (req, res) => {
  const id = req.params.id;
  historyService.deleteById(id).then(result => {
    res.send(result);
  })
});

module.exports = app;