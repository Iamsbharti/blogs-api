const express = require("express");
const router = require("./routes/blogRoutes");
const config = require("./app.config");
const init = require("./initdb");
const { baseurl } = require("./app.config");
require("dotenv");
const bodyParser = require("body-parser");
const { globalError, notFound } = require("./middlewares/globalMiddleWares");
const { logIP } = require("./middlewares/reqestIPMiddleware");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to blog API!!!");
});

//add middleware
console.log(baseurl);
app.use(bodyParser.json());
app.use(logIP);
app.use(config.baseurl, router);
app.use(globalError, notFound);

//init db
init.initdb();

app.listen(config.port, () =>
  console.log(`server started listining at-${config.port}`)
);
