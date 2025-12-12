const express = require("express");
const router = require("./routes/api.js");
const app = express();
const port = 3000;
require("./db/database.js");
const cors = require("cors");

function start() {
  app.listen(port, () => {
    console.log("App is Listenting");
  });
  app.use([cors(), express.urlencoded({ extended: true }), router]);
}

start();
