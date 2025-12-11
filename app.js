const express = require("express");
const router = require("./routes/api.js");
const app = express();
const port = 3000;

function start() {

  app.listen(port, () => {
    console.log("App is Listenting");
  });
    app.use([express.urlencoded({extended : true}),router]);
}

start()
