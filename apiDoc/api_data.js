define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"All Blog Details Found\",\n \"status\":200,\n \"data\": [\n        {\n            \"title\": \"string\",\n            \"description\": \"string\",\n            \"bodyHtml\": \"string\",\n            \"views\": \"number\",\n            \"ispublished\": \"boolean\",\n            \"tags\": \"array\",\n            \"author\": \"string\",\n            \"category\": \"string\",\n            \"created\": \"Date\",\n            \"lastModified\": \"Date\",\n            \"blogId\": \"string\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"No Blogs Found\",\n      \"status\": 200,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/:blogId",
    "title": "Get blog by blogID",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Blog Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"title\": \"string\",\n            \"description\": \"string\",\n            \"bodyHtml\": \"string\",\n            \"views\": \"number\",\n            \"ispublished\": \"boolean\",\n            \"tags\": \"array\",\n            \"author\": \"string\",\n            \"category\": \"string\",\n            \"created\": \"Date\",\n            \"lastModified\": \"Date\",\n            \"blogId\": \"string\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": false,\n      \"message\": \"No Blogs Found with - blogID\",\n      \"status\": 200,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewBlogid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/author/:author",
    "title": "Get blog by Author",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Blog Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"title\": \"string\",\n            \"description\": \"string\",\n            \"bodyHtml\": \"string\",\n            \"views\": \"number\",\n            \"ispublished\": \"boolean\",\n            \"tags\": \"array\",\n            \"author\": \"string\",\n            \"category\": \"string\",\n            \"created\": \"Date\",\n            \"lastModified\": \"Date\",\n            \"blogId\": \"string\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": false,\n      \"message\": \"No Blogs Found with - Author\",\n      \"status\": 200,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByAuthorAuthor"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/category/:category",
    "title": "Get blog by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Blog Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"title\": \"string\",\n            \"description\": \"string\",\n            \"bodyHtml\": \"string\",\n            \"views\": \"number\",\n            \"ispublished\": \"boolean\",\n            \"tags\": \"array\",\n            \"author\": \"string\",\n            \"category\": \"string\",\n            \"created\": \"Date\",\n            \"lastModified\": \"Date\",\n            \"blogId\": \"string\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": false,\n      \"message\": \"No Blogs Found with - category\",\n      \"status\": 200,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByCategoryCategory"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/count/view",
    "title": "BlogView Counter",
    "version": "0.0.1",
    "group": "write",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blog id to be edited</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"1 blog updated\",\n      \"status\": 200,\n      \"data\": {\n        \"currentview\": 1\n       }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"Internal Error\",\n      \"status\": 500,\n      \"data\": null\n   }",
          "type": "json"
        },
        {
          "title": "BlogId Not Found:",
          "content": "{\n  \"error\": false,\n  \"message\": \"No Blogs Found with - blogid\",\n  \"status\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "write",
    "name": "PostApiV1BlogsBlogidCountView"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/delete",
    "title": "Delete Blog",
    "version": "0.0.1",
    "group": "write",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blog id to be edited</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"1 blog deleted\",\n      \"status\": 200,\n      \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"Internal Error\",\n      \"status\": 500,\n      \"data\": null\n   }",
          "type": "json"
        },
        {
          "title": "BlogId Not Found:",
          "content": "{\n  \"error\": false,\n  \"message\": \"No Blogs Found with - blogid\",\n  \"status\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "write",
    "name": "PostApiV1BlogsBlogidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/edit",
    "title": "Edit Blog",
    "version": "0.0.1",
    "group": "write",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blog id to be edited</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "any",
            "description": "<p>Any attribute relared to blog</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"1 value updated\",\n      \"status\": 200,\n      \"data\": \"1 row modified\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"Internal Error\",\n      \"status\": 500,\n      \"data\": null\n   }",
          "type": "json"
        },
        {
          "title": "BlogId Not Found:",
          "content": "{\n  \"error\": false,\n  \"message\": \"No Blogs Found with - blogid\",\n  \"status\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "write",
    "name": "PostApiV1BlogsBlogidEdit"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/create",
    "title": "Create Blog",
    "version": "0.0.1",
    "group": "write",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication(send token as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"string\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"title\": \"string\",\n            \"description\": \"string\",\n            \"bodyHtml\": \"string\",\n            \"views\": \"number\",\n            \"ispublished\": \"boolean\",\n            \"tags\": \"array\",\n            \"author\": \"string\",\n            \"category\": \"string\",\n            \"created\": \"Date\",\n            \"lastModified\": \"Date\",\n            \"blogId\": \"string\",\n            \"__v\": \"number\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"Internal Error\",\n      \"status\": 500,\n      \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blogRoutes.js",
    "groupTitle": "write",
    "name": "PostApiV1BlogsCreate"
  }
] });
