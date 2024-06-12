const Explore = require("../models/exploreModels");
const {
  uploadImage,
  uploadMultipleImages,
} = require("../pathHandling/uploadImages");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const exploreController = {
  creareExplore: async (req, res) => {
    try {
      const { title, description, category } = req.body;
      const images = req.body.images;
      console.log(images);
      const photoPath = await uploadImage(images);
      console.log(photoPath);
      const response = await Explore.create({
        title: title,
        description: description,
        category: category,
        images: photoPath,
        author: req.user._id,
      });
      // Đang còn suy nghĩ để sử lý update thay 1 ảnh trong 1 mảng
      // for (let i = 0; i < photoPath.length; i++) {
      //   response.images.push(photoPath[i]);
      // }
      // await response.save();

      return res.status(200).json({ success: true, message: response });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating explore" });
    }
  },
  getExplore: async (req, res) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const results = {};
      const dataLength = await Explore.find({});
      //   console.log(page);
      starExplore = (page - 1) * limit;
      endExplore = page * limit;
      // console.log(dataLength.length);
      if (endExplore < dataLength.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (starExplore > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.results = await Explore.find({})
        .populate("author", ["username", "avatar"])
        .populate({
          path: "comments",
          populate: { path: "author", select: "username avatar" },
        })
        .sort({ $natural: -1 })
        .limit(limit)
        .skip(starExplore)
        .exec();
      return res.status(200).json({ success: true, results });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error get explore" });
    }
  },
  detailsExplore: async (req, res) => {
    try {
      const detailID = req.query.detailID;
      const isValidObjectId = ObjectId.isValid(detailID);
      if (!isValidObjectId) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
      const result = await Explore.findById({ _id: detailID })
        .populate("author", ["username", "location"])
        .populate({
          path: "comments",
          populate: { path: "author", select: "username avatar" },
        });
      if (!result) {
        return res
          .status(401)
          .json({ success: false, message: "The article does not exist" });
      }
      return res.status(200).json({ success: true, result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: error, message: "Error getting details" });
    }
  },

  classifyExplore: async (req, res) => {
    try {
      const category = req.query.category;
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const results = {};
      const dataLength = await Explore.find({ category: category });
      starExplore = (page - 1) * limit;
      endExplore = page * limit;
      // console.log(dataLength);
      if (endExplore < dataLength.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (starExplore > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.results = await Explore.find({ category: category })
        .populate("author", ["username", "avatar"])
        .populate({
          path: "comments",
          populate: { path: "author", select: "username avatar" },
        })
        .sort({ $natural: -1 })
        .limit(limit)
        .skip(starExplore)
        .exec();
      return res.status(200).json({ success: true, message: results });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating Explore" });
    }
  },
  updateExplore: async (req, res) => {
    try {
      const { exploreId, title, content } = req.body;
      const images = req.files.images;
      const username = await Explore.findOne({ author: req.user._id });
      const idExplore = await Explore.findById({ _id: exploreId });
      if (!username) {
        return res.status(401).json({
          success: false,
          message: "You are not the owner of this article",
        });
      }

      if (!idExplore) {
        return res
          .status(403)
          .json({ success: false, message: "The article does not exist" });
      }
      const photoPath = await uploadImage(images);
      await Explore.updateOne(
        { _id: exploreId },
        { title: title, images: photoPath, content: content }
      );
      return res
        .status(200)
        .json({ success: true, message: "Update Explore successful" });
      // "Update Explore successful"
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating Explore" });
    }
  },
  deleteExplore: async (req, res) => {
    try {
      const { exploreId } = req.body;
      const userName = await Explore.findOne({
        author: req.user._id,
        _id: exploreId,
      });
      if (!userName) {
        return res
          .status(401)
          .json({ success: false, message: "You cannot delete this explore" });
      }
      await Explore.deleteOne({ _id: exploreId });
      return res.status(200).json({
        success: true, 
        message: "Explore deleted successfully",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please reconnect to the server" });
    }
  },
};
module.exports = exploreController;
