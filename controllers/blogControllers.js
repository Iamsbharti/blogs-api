const express = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Blogs = require("../models/Blog");
const EXCLUDE = "-__v -_id";
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
        ? res.status(200).json({ message: error })
        : res.status(200).json(`${newBlog.title} was posted`);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.getAllBlogs = (req, res) => {
  console.log("req getall");
  const blogs = Blogs.find()
    .select(EXCLUDE)
    .lean()
    .exec((error, result) => {
      error !== null
        ? result.length === 0
          ? res.status(200).json({ message: "No Blogs Found" })
          : res.status(200).json(result)
        : res.status(500).json({ message: error });
    });
};
exports.viewBlogById = function (req, res) {
  console.log("viewBlogById");
  const blogId = req.params.blogId;
  computeResponse = (error, result) => {
    console.log("call", error, result.length);
    error !== null
      ? result.length === 0
        ? res.status(200).json({ message: `No Blogs Found with - ${blogId}` })
        : res.status(200).json(result)
      : res.status(500).json(error);
  };
  console.log("get blog for", blogId);
  Blogs.find({ blogId: blogId }).select(EXCLUDE).lean().exec(computeResponse);
};
exports.viewByAuthor = function (req, res) {
  console.log("view by author", req.params);
  const authorName = req.params.author;
  computeResponse = (error, result) => {
    console.log("call", error, result);
    error !== null
      ? result.length === 0
        ? res
            .status(200)
            .json({ message: `No Blogs Found with - ${authorName}` })
        : res.status(200).json(result)
      : res.status(500).json(error);
  };
  console.log("get blog for", authorName);
  Blogs.find({ author: authorName })
    .select(EXCLUDE)
    .lean()
    .exec(computeResponse);
};
exports.viewByCategory = function (req, res) {
  console.log("view by category", req.params);
  const categoryName = req.params.category;
  console.log("Get blog for", categoryName);
  computeResponse = (error, result) => {
    console.log("call", error, result);
    error !== null
      ? result.length === 0
        ? res
            .status(200)
            .json({ message: `No Blogs Found with - ${categoryName}` })
        : res.status(200).json(result)
      : res.status(500).json(error);
  };
  Blogs.find({ category: categoryName }).select(EXCLUDE).exec(computeResponse);
};
exports.editBlog = function (req, res) {
  console.log("edit blog", req.params);
  const { blogId } = req.params;
  console.log("edit ", blogId);
  const { title, description, bodyHtml, tags, author, category } = req.body;
  const updatedBlog = {
    blogId: blogId,
    title: title,
    description: description,
    bodyHtml: bodyHtml,
    ispublished: true,
    tags: tags,
    author: author,
    category: category,
  };
  computeResponse = (error, { n }) => {
    console.log("call", error, n);
    error !== null
      ? n === 0
        ? res.status(200).json({ message: `No Blogs Found with - ${blogId}` })
        : res.status(200).json(`${n} value updated`)
      : res.status(500).json(error);
  };
  //update
  let query = { blogId: blogId };
  Blogs.updateOne(query, { $set: updatedBlog }, computeResponse);
};
exports.deleteBlog = function (req, res) {
  console.log("delete blog", req.params);
  const { blogId } = req.params;
  console.log("delete", blogId);

  //delete
  computeResponse = (error, { n }) => {
    console.log("call", error, n);
    error !== null
      ? n === 0
        ? res.status(200).json({ message: `No Blogs Found with - ${blogId}` })
        : res.status(200).json(`${n} blog deleted`)
      : res.status(500).json(error);
  };
  Blogs.deleteOne({ blogId: blogId }, computeResponse);
};
exports.incrementCount = function (req, res) {
  console.log("count++", req.params);
  const { blogId } = req.params;
  console.log("increment view", blogId);
  let foundBlog;
  //increment view
  computeResponse = (error, { n }) => {
    console.log("call", error, n);
    error === null
      ? res
          .status(200)
          .json({ message: `${n} blog updated`, currentview: foundBlog.views })
      : res.status(500).json(error);
  };
  let query = { blogId: blogId };
  Blogs.findOne({ blogId: blogId }, (error, result) => {
    console.log(error, result.blogId, result.views, typeof result.views);
    foundBlog = result;
    error === null && result.blogId === blogId
      ? Blogs.updateOne(
          query,
          { $set: { views: result.views + 1 } },
          computeResponse
        )
      : res.status(200).json({ message: `No blogs found-${blogId}` });
  });
};
