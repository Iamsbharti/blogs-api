const express = require("express");
const router = express.Router();
const config = require("../app.config");
const blogController = require("../controllers/blogControllers");

let URL = config.baseurl;

//routes
router.get(URL + "/all", blogController.getAllBlogs);
router.get(URL + "/view/:blogId", blogController.viewBlogById);
router.get(URL + "/view/by/author/:author", blogController.viewByAuthor);
router.get(URL + "/view/by/category/:categor", blogController.viewByCategory);
router.post(URL + "/:blogId/edit", blogController.editBlog);
router.post(URL + "/:blogId/delete", blogController.deleteBlog);
router.post(URL + "/create", blogController.createBlog);
router.post(URL + "/:blogId/count.view", blogController.incrementCount);

module.exports = router;
