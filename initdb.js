const mongoose = require("mongoose");
const config = require("./app.config");

exports.initdb = async function () {
  let db = mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (error) =>
    console.log(`Error connection db-${error}`)
  );
  mongoose.connection.on("open", (error) =>
    error ? console.log(error) : console.log("DB Connection success")
  );
};
