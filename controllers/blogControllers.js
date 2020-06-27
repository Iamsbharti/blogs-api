const express = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const { formatRes } = require("../lib/formatResponse");
const { now } = require("../lib/formatTime");
const Blogs = require("../models/Blog");
const EXCLUDE = "-__v -_id";
exports.createBlog = function (req, res) {
  //console.log("create blog", req.body);
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
    created: Date.now,
  });

  Blogs.create(newBlog, (error, newBlog) => {
    error === undefined
      ? res.status(200).json(formatRes(true, "Internal Error", 500, null))
      : res
          .status(200)
          .json(formatRes(false, `${newBlog.title} was posted`, 200, newBlog));
  });
};
exports.getAllBlogs = (req, res) => {
  //console.log("req getall");
  const blogs = Blogs.find()
    .select(EXCLUDE)
    .lean()
    .exec((error, result) => {
      //console.log(error, result);
      error === null
        ? result.length === 0
          ? res.status(200).json(formatRes(false, "No Blogs Found", 200, null))
          : res
              .status(200)
              .json(formatRes(false, `${result.length} blogs`, 200, result))
        : res
            .status(500)
            .json(formatRes(true, "Error Fetching Blogs", 500, error));
    });
};
exports.viewBlogById = function (req, res) {
  //console.log("viewBlogById");
  const blogId = req.params.blogId;
  computeResponse = (error, result) => {
    //console.log("call", error, result.length);
    error === null
      ? result.length === 0
        ? res
            .status(200)
            .json(
              formatRes(false, `No Blogs Found with - ${blogId}`, 200, null)
            )
        : res.status(200).json(formatRes(false, "Blog Found", 200, result))
      : res
          .status(500)
          .json(formatRes(true, "Error fetching blog", 500, error));
  };
  //console.log("get blog for", blogId);
  Blogs.find({ blogId: blogId }).select(EXCLUDE).lean().exec(computeResponse);
};
exports.viewByAuthor = function (req, res) {
  //console.log("view by author", req.params);
  const authorName = req.params.author;
  computeResponse = (error, result) => {
    //console.log("call", error, result);
    error === null
      ? result.length === 0
        ? res
            .status(200)
            .json(
              formatRes(false, `No Blogs Found with - ${authorName}`, 200, null)
            )
        : res.status(200).json(formatRes(false, "Sucess", 200, result))
      : res
          .status(500)
          .json(formatRes(true, "Error fetching blog", 500, error));
  };
  //console.log("get blog for", authorName);
  Blogs.find({ author: authorName })
    .select(EXCLUDE)
    .lean()
    .exec(computeResponse);
};
exports.viewByCategory = function (req, res) {
  //console.log("view by category", req.params);
  const categoryName = req.params.category;
  //console.log("Get blog for", categoryName);
  computeResponse = (error, result) => {
    //console.log("call", error, result);
    error === null
      ? result.length === 0
        ? res
            .status(200)
            .json(
              formatRes(
                false,
                `No Blogs Found with - ${categoryName}`,
                200,
                null
              )
            )
        : res.status(200).json(formatRes(false, "Sucess", 200, result))
      : res
          .status(500)
          .json(formatRes(true, "Error fetching blog", 500, error));
  };
  Blogs.find({ category: categoryName }).select(EXCLUDE).exec(computeResponse);
};
exports.editBlog = function (req, res) {
  //console.log("edit blog", req.params);
  const { blogId } = req.params;
  //console.log("edit ", blogId);

  const options = req.body;
  computeResponse = (error, { n }) => {
    //console.log("call--", error, n);
    error === null
      ? n === 0
        ? res
            .status(200)
            .json(
              formatRes(false, `No Blogs Found with - ${blogId}`, 200, null)
            )
        : res
            .status(200)
            .json(formatRes(false, `${n} value updated`, 200, "1 row modified"))
      : res.status(500).json(formatRes(true, "Error editing blog", 500, error));
  };
  //update
  let query = { blogId: blogId };
  Blogs.updateOne(query, options, computeResponse);
};
exports.deleteBlog = function (req, res) {
  //console.log("delete blog", req.params);
  const { blogId } = req.params;
  //console.log("delete", blogId);

  //delete
  computeResponse = (error, { n }) => {
    //console.log("call", error, n);
    error === null
      ? n === 0
        ? res
            .status(200)
            .json(
              formatRes(false, `No Blogs Found with - ${blogId}`, 200, null)
            )
        : res.status(200).json(formatRes(false, `${n} blog deleted`, 200, null))
      : res
          .status(500)
          .json(formatRes(true, "Error deleting blog", 500, error));
  };
  Blogs.deleteOne({ blogId: blogId }, computeResponse);
};
exports.incrementCount = function (req, res) {
  //console.log("count++", req.params);
  const { blogId } = req.params;
  //console.log("increment view", blogId);
  let foundBlog;
  //increment view
  computeResponse = (error, { n }) => {
    //console.log("call", error, n);
    error === null
      ? res.status(200).json(
          formatRes(false, `${n} blog updated`, 200, {
            currentview: foundBlog.views + 1,
          })
        )
      : res
          .status(500)
          .json(formatRes(true, "Error updating views", 500, error));
  };
  let query = { blogId: blogId };
  Blogs.findOne({ blogId: blogId }, (error, result) => {
    //console.log(error, result.blogId, result.views, typeof result.views);
    foundBlog = result;
    error === null && result.blogId === blogId
      ? Blogs.updateOne(
          query,
          { $set: { views: result.views + 1 } },
          computeResponse
        )
      : res
          .status(200)
          .json(formatRes(true, `No blogs found-${blogId}`, 200, error));
  });
};
