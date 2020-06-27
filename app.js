const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./User.js");

let db = mongoose.connect(
  "mongodb://testuser:password123@ds149252.mlab.com:49252/assignment",
  { useMongoClient: true }
);
const { generateResponse } = require("./responseLib");

//store 2 users
let u1 = new UserModel({
  userId: "user1",
  firstName: "Akshay",
  lastName: "Kumar",
  email: "khiladi@gmail.com",
});
let u2 = new UserModel({
  userId: "user2",
  firstName: "Rajnikanth",
  lastName: "",
  email: "boss@rajnikanth.com",
});
UserModel.create(u1, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
UserModel.create(u2, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

//api routes
app.get("/users", (req, res) => {
  UserModel.find().exec((error, result) => {
    if (error) {
      res.json(generateResponse(true, 500, "Error occured", null));
    } else {
      res.json(generateResponse(false, 200, null, result));
    }
  });
});
//get user by // IDEA:
app.get("/users/:userId", (req, res) => {
  UserModel.findOne({ userId: req.params.userId }, (error, result) => {
    if (error) {
      res.json(generateResponse(true, 500, "Error occured", null));
    } else {
      res.json(generateResponse(false, 200, null, result));
    }
  });
});
module.exports = app;

//-------------------------------
/*const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/split/name", (req, res) => {
  const name = req.query.fullName;
  //console.log(name.split(" "));
  const nameArr = name.split(" ");
  res.json({ firstName: nameArr[0], lastName: nameArr[1] });
}); // end split name

app.get("/calculate/age", (req, res) => {
  let dd = new Date(req.query.dob);
  let now = new Date();
  //console.log(dd.getFullYear(), now.getFullYear());
  let age = now.getFullYear() - dd.getFullYear();
  //console.log(age);
  res.json({ age: age });
}); // end calculate age

module.exports = app;
*/
