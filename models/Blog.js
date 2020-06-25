const mongoose = require("mongoose");

const schema = mongoose.Schema;

let blogSchema = new schema({
  blogId: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  bodyHtml: {
    type: String,
    default: "",
  },
  views: {
    type: Number,
    default: 0,
  },
  ispublished: {
    type: Boolean,
    default: false,
  },
  tags: [],
  author: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: new Date(),
  },
  lastModified: {
    type: Date,
    default: new Date(),
  },
});
mongoose.model("Blog", blogSchema);
