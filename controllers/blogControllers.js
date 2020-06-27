const express = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Blogs = require("../models/Blog");

exports.createBlog = function (req, res) {
  console.log("create blog", req.body);
  const { title, description, bodyHtml, tags, author, category } = req.body;
  const newBlog = new Blogs({
    blogId: uuidv4(),
    title: title,
    description: description,
    bodyHtml: bodyHtml,
    ispublished: true,
    tags: tags,
    author: author,
    category: category,
  });
  try {
    Blogs.create(newBlog, (error, newBlog) => {
      error === undefined
        ? res.status(500).json({ message: console.error })
        : res.status(200).send(`${newBlog.title} was posted`);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.getAllBlogs = async (req, res) => {
  console.log("req getall");
  const blogs = await Blogs.find();
  blogs.length === 0
    ? res.status(200).send("No Blogs Found")
    : res.status(200).json(blogs);
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
