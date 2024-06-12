const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    explore: { type: mongoose.Schema.Types.ObjectId, ref: "explore" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    text: String,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("commentexplore", CommentSchema);

module.exports = Comment;
