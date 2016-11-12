const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const app = express();
const fs = require("fs");
const path = require("path");
// const morgan = require("morgan");



// app.use(morgan("dev"));

app.use(express.static("public"));

app.engine("html", nunjucks.render);
app.set("view engine", "html");

app.listen( 3000, function(){
  console.log("server listening");
});

nunjucks.configure("views", {noCache: true});


app.use("/", routes);
