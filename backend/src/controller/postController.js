//const imageMieTypes = ["image/jpeg", "image/png", "image/gif"];

const Post = require("../models/postModels");
const User = require("../models/userModels");
const Comment = require("../models/commentModels");
const {
  uploadMultipleImages,
  uploadImage,
} = require("../pathHandling/uploadImages");

const postController = {
  createPostStatus: async (req, res) => {
    // create không cần check điều kiện vì nó có thể đăng ảnh hoặc status: khi không đăng 1 trong 1 thì nó sẽ cho về null cái không có gì
    try {
      const { title, image } = req.body;
      // const images = req.files.images;
      // console.log(image);
      const author = await User.findById({ _id: req.user._id });
      if (!author) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot post to this profile" });
      }

      photoPath = await uploadImage(image);
      const response = await Post.create({
        author: req.user._id,
        title: title,
        image: photoPath,
        // image: image,
      });

      return res.status(200).json({ success: true, message: response });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating post" });
    }
  },

  getMyStatus: async (req, res) => {
    try {
      const author = req.query.author;
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const results = {};
      const starPost = (page - 1) * limit;
      const endPost = page * limit;
      // console.log(endPost);

      if (author) {
        const userPostName = await Post.find({ author: author });

        if (!userPostName) {
          return res
            .status(401)
            .json({ success: false, message: "User not found" });
        }

        if (endPost < userPostName.length) {
          results.next = {
            page: page + 1,
            limit: limit,
          };
        }
        if (starPost > 0) {
          results.previous = {
            page: page - 1,
            limit: limit,
          };
        }
        //console.log(results);
        results.results = await Post.find({ author: author })
          .populate("author", ["username", "avatar"])
          .populate("likes", ["username", "avatar"])
          .populate([
            {
              path: "comments",
              populate: { path: "author", select: "username avatar" },
            },
          ])
          .sort({ $natural: -1 })
          .limit(limit)
          .skip(starPost)
          .exec();

        return res.status(200).json({ success: true, message: results });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating post" });
    }
  },

  getAllStatus: async (req, res) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const results = {};
      const dataLength = await Post.find({});
      const starPost = (page - 1) * limit;
      const endPost = page * limit;

      if (endPost < dataLength.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (starPost > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      //console.log(results);
      results.results = await Post.find({})
        .populate("author", ["username", "avatar"])
        .populate("likes", ["username", "avatar"])
        .populate({
          path: "comments",
          populate: { path: "author", select: "username avatar" },
        })
        .sort({ $natural: -1 })
        .limit(limit)
        .skip(starPost)
        .exec();
      return res.status(200).json({ success: true, message: results });
      // return res.status(200).json({ success: true, message: "hehee" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating post" });
    }
  },

  updatePostStatus: async (req, res) => {
    try {
      const { postID, title } = req.body;
      const image = req.body.image;
      const username = await Post.findOne({ author: req.user._id });
      const idPost = await Post.findById({ _id: postID });
      //console.log("Check ", postID);
      if (!username) {
        return res.status(401).json({
          success: false,
          message: "You are not the owner of this article",
        });
      }

      if (!idPost) {
        return res
          .status(403)
          .json({ success: false, message: "The article does not exist" });
      }
      photoPath = await uploadImage(image);
      await Post.updateOne({ _id: postID }, { title, photoPath });
      //console.log("Updated", result);
      return res
        .status(200)
        .json({ success: true, message: "Update status successful" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating status" });
    }
  },

  likesPostStatus: async (req, res) => {
    try {
      const postId = req.body.postId;
      const authorLike = await Post.findOne({
        _id: postId,
        likes: [req.user._id],
      });
      if (!authorLike) {
        const result = await Post.findByIdAndUpdate(
          postId,
          {
            $push: { likes: req.user.id },
          },
          {
            new: true,
          }
        ).exec();
        return res.status(200).json({ success: true, message: result });
      } else {
        const result = await Post.findByIdAndUpdate(
          postId,
          {
            $pull: { likes: req.user.id },
          },
          {
            new: true,
          }
        ).exec();
        return res.status(200).json({ success: true, message: result });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please reconnect to the server" });
    }
  },

  commentsPostStatus: async (req) => {
    try {
      const postId = req.post;
      const commentId = req._id;
      await Post.findByIdAndUpdate(
        postId,
        {
          $push: { comments: commentId },
        },
        {
          new: true,
        }
      ).exec();
      return "Comment on the article successfully";
    } catch (error) {
      return null;
    }
  },

  deletePostStatus: async (req, res) => {
    try {
      const { postID } = req.body;
      const userName = await Post.findOne({ author: req.user._id });
      if (!userName) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot delete this post" });
      }
      const idPost = await Post.findById({ _id: postID });
      if (!idPost) {
        return res
          .status(401)
          .json({ success: false, message: "The article does not exist" });
      }
      await Post.deleteOne({ _id: postID });
      await Comment.deleteMany({ post: postID });
      return res.status(200).json({
        success: true,
        message:
          "Post deleted successfully and Successfully deleted all comments related to this article",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please reconnect to the server" });
    }
  },
};

module.exports = postController;
