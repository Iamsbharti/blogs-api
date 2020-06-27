let config = {};
config.port = 3000;
config.allowedCorsOrigin = "*";
config.env = "dev";
config.db = {
  url: "mongodb://localhost:27017/blogs",
};
config.apiVersion = "/api/v1";
config.baseurl = config.apiVersion + "/blogs";
module.exports = config;
