const Comment = require("../models/commentModels");
const Post = require("../models/postModels");
const Usser = require("../models/userModels");
const postController = require("./postController");

const commentController = {
  createComment: async (req, res) => {
   
    try {
      const { postId, text } = req.body;
      if (!postId) {
        return res
          .status(401)
          .json({ success: false, message: "Please select an article" });
      }
      const post = await Post.findById({ _id: postId });
      if (!post) {
        return res
          .status(401)
          .json({ success: false, message: "The article does not exist" });
      }
      if (!text) {
        return res
          .status(401)
          .json({ success: false, message: "Please fill in the content" });
      }

      const result = await Comment.create({
        post: postId,
        author: req.user.id,
        text: text,
      });
      result.save();
      const notification = await postController.commentsPostStatus(result);
      if (notification == null) {
        return res.status(405).json({
          success: false,
          message: "Unable to comment on this post, please try again",
        });
      }
      return res.status(200).json({
        success: true,
        message: {
          result,
          notification,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Search for conclusion" });
    }
  },

  getComment: async (req, res) => {
    try {
      const postId = req.body.postId;
      const post = await Comment.findOne({ post: postId });
      if (!post) {
        return res
          .status(401)
          .json({ success: false, message: "Article does not exist" });
      }
      const result = await Comment.find({ post: postId })
        .populate("author", ["username", "avatar"])
        .exec();
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Search for conclusion" });
    }
  },
  updateComment: async (req, res) => {
    try {
      const { commentId, text } = req.body;
      const author = await Comment.findOne({ author: req.user.id });
      if (!author) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot edit this comment" });
      }
      const comment = await Comment.findById({ _id: commentId });
      if (!comment) {
        return res
          .status(401)
          .json({ success: false, message: "Comments do not exist" });
      }

      await Comment.updateOne({ _id: commentId }, { text: text });
      return res
        .status(200)
        .json({ success: true, message: "Comment edited successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Search for conclusion" });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.body;
      const author = await Comment.findOne({
        author: req.user.id,
        _id: commentId,
      });
      // console.log(author);
      const authorPost = await Post.findOne({
        author: req.user._id,
        comments: commentId,
      });
      // const admin = await Usser.findOne({ admin: req.user.admin });
      // console.log(admin);
      if (!authorPost && !author) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot delete this comment" });
      }
      await Comment.deleteOne({ _id: commentId });
      await authorPost.comments.pull(commentId);
      authorPost.save();
      return res
        .status(200)
        .json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check the data again" });
    }
  },
};

module.exports = commentController;
