const commentExplore = require("../models/commentExploreModels");
const Explore = require("../models/exploreModels");
const User = require("../models/userModels");
const commetnExpore = {
  createCommentExplore: async (req, res) => {
    try {
      const { exploreId, text } = req.body;
      // console.log(exploreId, author, text);
      if (!exploreId) {
        return res
          .status(401)
          .json({ success: false, message: "Please select an article" });
      }
      const explore = await Explore.findById({ _id: exploreId });
      if (!explore) {
        return res
          .status(401)
          .json({ success: false, message: "The article does not exist" });
      }
      if (!text) {
        return res
          .status(401)
          .json({ success: false, message: "Please fill in the content" });
      }

      const result = await commentExplore.create({
        explore: exploreId,
        author: req.user._id,
        text: text,
      });
      await explore.comments.push(result._id);
      explore.save();
      //   console.log(explore);
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating comment" });
    }
  },

  getCommentExplore: async (req, res) => {
    try {
      const exploreId = req.body.exploreId;
      const explore = await commentExplore.findOne({ explore: exploreId });
      if (!explore) {
        return res
          .status(401)
          .json({ success: false, message: "Article does not exist" });
      }
      const result = await commentExplore
        .find({ explore: exploreId })
        .populate("author", ["username", "avatar"])
        .exec();

      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check the transmission" });
    }
  },

  updateCommentExplore: async (req, res) => {
    try {
      const { commentId, text } = req.body;
      const author = await commentExplore.findOne({ author: req.user._id });
      if (!author) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot edit this comment" });
      }
      const comment = await commentExplore.findById({ _id: commentId });
      if (!comment) {
        return res
          .status(401)
          .json({ success: false, message: "Comments do not exist" });
      }

      await commentExplore.updateOne({ _id: commentId }, { text: text });
      return res
        .status(200)
        .json({ success: true, message: "Comment edited successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating comment" });
    }
  },
  deleteCommentExplore: async (req, res) => {
    try {
      const { commentId } = req.body;
      const author = await commentExplore.findOne({
        author: req.user.id,
        _id: commentId,
      });
      // console.log(author);
      const authorExplore = await Explore.findOne({
        author: req.user._id,
        comments: commentId,
      });
      const admin = await Usser.findOne({ admin: req.user.admin });
      // console.log(authorPost);
      if (!authorExplore && !author && !admin) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot delete this comment" });
      }
      await commentExplore.deleteOne({ _id: commentId });
      await authorExplore.comments.pull(commentId);
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

module.exports = commetnExpore;
