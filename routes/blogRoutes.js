const express = require("express");
const router = express.Router();
const config = require("../app.config");
const blogController = require("../controllers/blogControllers");
const { apiVersion } = require("../app.config");

//routes
router.get("/all", blogController.getAllBlogs);
/**
 * @api {get} /api/v1/blogs/all Get all blogs
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam{String} authToken The token for authentication(send token as query parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "error":false,
 *  "message":"All Blog Details Found",
 *  "status":200,
 *  "data": [
        {
            "title": "string",
            "description": "string",
            "bodyHtml": "string",
            "views": "number",
            "ispublished": "boolean",
            "tags": "array",
            "author": "string",
            "category": "string",
            "created": "Date",
            "lastModified": "Date",
            "blogId": "string"
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response:
 * {
      "error": false,
      "message": "No Blogs Found",
      "status": 200,
      "data": null
    }
 */
router.get("/view/:blogId", blogController.viewBlogById);
/**
 * @api {get} /api/v1/blogs/view/:blogId Get blog by blogID
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam{String} authToken The token for authentication(send token as query parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "error": false,
    "message": "Blog Found",
    "status": 200,
    "data": [
        {
            "title": "string",
            "description": "string",
            "bodyHtml": "string",
            "views": "number",
            "ispublished": "boolean",
            "tags": "array",
            "author": "string",
            "category": "string",
            "created": "Date",
            "lastModified": "Date",
            "blogId": "string"
        }
    ]
 * }
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": false,
      "message": "No Blogs Found with - blogID",
      "status": 200,
      "data": null
    }
*/
router.get("/view/by/author/:author", blogController.viewByAuthor);
/**
 * @api {get} /api/v1/blogs/view/by/author/:author Get blog by Author
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam{String} authToken The token for authentication(send token as query parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "error": false,
    "message": "Blog Found",
    "status": 200,
    "data": [
        {
            "title": "string",
            "description": "string",
            "bodyHtml": "string",
            "views": "number",
            "ispublished": "boolean",
            "tags": "array",
            "author": "string",
            "category": "string",
            "created": "Date",
            "lastModified": "Date",
            "blogId": "string"
        }
    ]
 * }
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": false,
      "message": "No Blogs Found with - Author",
      "status": 200,
      "data": null
    }
*/
router.get("/view/by/category/:category", blogController.viewByCategory);
/**
 * @api {get} /api/v1/blogs/view/by/category/:category Get blog by category
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam{String} authToken The token for authentication(send token as query parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "error": false,
    "message": "Blog Found",
    "status": 200,
    "data": [
        {
            "title": "string",
            "description": "string",
            "bodyHtml": "string",
            "views": "number",
            "ispublished": "boolean",
            "tags": "array",
            "author": "string",
            "category": "string",
            "created": "Date",
            "lastModified": "Date",
            "blogId": "string"
        }
    ]
 * }
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": false,
      "message": "No Blogs Found with - category",
      "status": 200,
      "data": null
    }
*/

router.post("/:blogId/edit", blogController.editBlog);
/**
 * @api {post} /api/v1/blogs/:blogId/edit Edit Blog
 * @apiVersion 0.0.1
 * @apiGroup write
 *
 * @apiParam {String} authToken The token for authentication(send token as query parameter)
 * @apiParam {String} blogId The blog id to be edited
 * @apiParam {String} any Any attribute relared to blog
 * @apiSuccessExample {json} Success-Response:
 * {
      "error": false,
      "message": "1 value updated",
      "status": 200,
      "data": "1 row modified"
    }
 * 
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": true,
      "message": "Internal Error",
      "status": 500,
      "data": null
   }
 *  @apiErrorExample {json} BlogId Not Found:
    {
      "error": false,
      "message": "No Blogs Found with - blogid",
      "status": 200,
      "data": null
    }
*/

router.post("/:blogId/delete", blogController.deleteBlog);
/**
 * @api {post} /api/v1/blogs/:blogId/delete Delete Blog
 * @apiVersion 0.0.1
 * @apiGroup write
 *
 * @apiParam {String} authToken The token for authentication(send token as query parameter)
 * @apiParam {String} blogId The blog id to be edited
 *
 * @apiSuccessExample {json} Success-Response:
 * {
      "error": false,
      "message": "1 blog deleted",
      "status": 200,
      "data": null
    }
 * 
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": true,
      "message": "Internal Error",
      "status": 500,
      "data": null
   }
 *  @apiErrorExample {json} BlogId Not Found:
    {
      "error": false,
      "message": "No Blogs Found with - blogid",
      "status": 200,
      "data": null
    }
*/

router.post("/create", blogController.createBlog);
/**
 * @api {post} /api/v1/blogs/create Create Blog
 * @apiVersion 0.0.1
 * @apiGroup write
 *
 * @apiParam{String} authToken The token for authentication(send token as query parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "error": false,
    "message": "string",
    "status": 200,
    "data": [
        {
            "title": "string",
            "description": "string",
            "bodyHtml": "string",
            "views": "number",
            "ispublished": "boolean",
            "tags": "array",
            "author": "string",
            "category": "string",
            "created": "Date",
            "lastModified": "Date",
            "blogId": "string",
            "__v": "number"
        }
    ]
 * }
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": true,
      "message": "Internal Error",
      "status": 500,
      "data": null
   }
*/

router.post("/:blogId/count/view", blogController.incrementCount);
/**
 * @api {post} /api/v1/blogs/:blogId/count/view BlogView Counter
 * @apiVersion 0.0.1
 * @apiGroup write
 *
 * @apiParam {String} authToken The token for authentication(send token as query parameter)
 * @apiParam {String} blogId The blog id to be edited
 *
 * @apiSuccessExample {json} Success-Response:
 * {
      "error": false,
      "message": "1 blog updated",
      "status": 200,
      "data": {
        "currentview": 1
       }
    }
 * 
 *  @apiErrorExample {json} Error-Response:
 * 
 * {
      "error": true,
      "message": "Internal Error",
      "status": 500,
      "data": null
   }
 *  @apiErrorExample {json} BlogId Not Found:
    {
      "error": false,
      "message": "No Blogs Found with - blogid",
      "status": 200,
      "data": null
    }
*/

module.exports = router;
