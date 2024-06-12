const Message = require("../models/messageModels");
const User = require("../models/userModels");
const Chat = require("../models/chatsModels");

const messageController = {
  sendMessage: async (req, res) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
      return res
        .status(404)
        .json({ success: false, message: "Missing Content or Chat ID" });
    }

    try {
      let message = await Message.create({
        sender: req.user._id,
        content: content,
        chat: chatId,
      });

      message = await message.populate("sender", "username avatar ");

      message = await message.populate({
        path: "chat",
        populate: { path: "users", select: "username avatar email" },
      });

      await Chat.findByIdAndUpdate(req.body.chatId, {
        latestMessage: message,
      });

      return res.status(200).json({ success: true, message: message });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  },

  fetchAllMessage: async (req, res) => {
    try {
      const messages = await Message.find({ chat: req.params.chatId })
        .populate("sender", "username avatar email")
        .populate("chat");
      return res.status(200).json({ success: true, message: messages });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  },

  deleteMessage: async (req, res) => {
    try {
      const { messageId } = req.body;

      if (!messageId) {
        return res
          .status(404)
          .json({ success: false, message: "Can't remove message" });
      }

      await Message.deleteOne({ _id: messageId });
      return res
        .status(200)
        .json({ success: true, message: "Message deleted successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  },
};

module.exports = messageController;
