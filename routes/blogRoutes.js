const express = require("express");
const router = express.Router();
const config = require("../app.config");
const blogController = require("../controllers/blogControllers");

//routes
router.get("/all", blogController.getAllBlogs);
router.get("/view/:blogId", blogController.viewBlogById);
router.get("/view/by/author/:author", blogController.viewByAuthor);
router.get("/view/by/category/:category", blogController.viewByCategory);
router.post("/:blogId/edit", blogController.editBlog);
router.post("/:blogId/delete", blogController.deleteBlog);
router.post("/create", blogController.createBlog);
router.post("/:blogId/count.view", blogController.incrementCount);

module.exports = router;
