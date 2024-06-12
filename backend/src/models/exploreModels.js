const mongoose = require("mongoose");

const ExploreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "Event",
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "commentexplore" }],
  },
  {
    timestamps: true,
  }
);

const Explore = mongoose.model("explore", ExploreSchema);

module.exports = Explore;
