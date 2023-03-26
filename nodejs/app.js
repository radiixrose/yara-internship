const app = require("./controllers/config.js");
const controllers = require("./controllers/controllers.js");

const http = require("http");
const server = http.createServer(app);

app.get("/", (request, response) => {
  response.send("Hey! This is your server response!!!");
});

server.listen(3000);
