const app = require('./config.js');
const bodyParser = require('body-parser');
const clientService = require('../service/client-service.js');

app.get('/clients', (req, res) => {
  clientService.findAll().then((result) => {
    res.send(result);
  });
});

app.get('/clients/:id', (req, res) => {
  const id = req.params.id;
  clientService.findById(id).then((result) => {
    res.send(result);
  });
});

app.post('/clients', (req, res) => {
  const client = req.body;
  clientService.createClient(client).then((result) => {
    res.send(result);
  });
});

app.put('/clients/:id', (req, res) => {
  const id = req.params.id;
  const client = req.body;
  client.client_id = id; // set the client_id from the URL path
  clientService.updateClient(client).then((result) => {
    res.send(result);
  });
});

app.delete('/clients/:id', (req, res) => {
  const id = req.params.id;
  clientService.deleteById(id).then((result) => {
    if (result === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = app;
