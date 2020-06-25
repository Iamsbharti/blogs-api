const express = require("express");
exports.createBlog = function (req, res) {
  res.send("create blog", req.body);
};
exports.getAllBlogs = function (req, res) {
  res.send("get all blogs");
};
exports.viewBlogById = function (req, res) {
  res.send(req.params);
};
exports.viewByAuthor = function (req, res) {
  res.send("view by author", req.params);
};
exports.viewByCategory = function (req, res) {
  res.send("view by category", req, params);
};
exports.editBlog = function (req, res) {
  res.send("edit blog", req.params);
};
exports.deleteBlog = function (req, res) {
  res.send("delete blog", req, params);
};
exports.incrementCount = function (req, res) {
  res.send("count++", req.params);
};
