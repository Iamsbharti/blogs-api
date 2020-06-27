const express = require("express");

exports.notFound = function (req, res, next) {
  console.log("404 not found");
  res.status(404).json({ Error: "Route Not Found" });
};

exports.globalError = function (error, req, res, next) {
  console.warn("Global Error", error);
  res.send("Something went Wrong");
};
