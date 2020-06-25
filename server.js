const express = require("express");
const router = require("./routes/blogRoutes");
const config = require("./app.config");
const init = require("./initdb");
const model = require("./models/Blog");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to blog API!!!");
});

//add middleware
app.use(config.baseurl, router);

//init db
init.initdb();
app.listen(config.port, () =>
  console.log(`server started listining at-${config.port}`)
);
