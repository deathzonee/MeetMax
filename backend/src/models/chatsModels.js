const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "message" },
  },
  {
    timestamps: true,
  }
);

const chats = mongoose.model("chat", chatSchema);
module.exports = chats;
