const express = require("express");

exports.logIP = function (req, res, next) {
  let ip = req.ip;
  //let hostName = req.hostName;
  let reqName = req.method;
  let path = req.path;

  console.log(`${reqName}-requested from ${ip}-for path-${path}`);
  next();
};
