const User = require("../models/userModels");
const Chat = require("../models/chatsModels");

const chatController = {
  accessChat: async (req, res) => {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(404).json({
          success: false,
          message: "Missing User ID",
        });
      }

      let isChat = await Chat.find({
        $and: [
          { users: { $elemMatch: { $eq: req.user._id } } },
          { users: { $elemMatch: { $eq: userId } } },
        ],
      })
        .populate("users", ["-password", "-verified", "-emailToken"])
        .populate("latestMessage");

      isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "avatar username email",
      });
      //   console.log("isChat", isChat);

      if (isChat.length > 0) {
        // console.log("")
        return res.status(200).json({ success: true, message: isChat[0] });
      } else {
        let chatData = {
          chatName: "sender",
          users: [req.user._id, userId],
        };
        try {
          const createChat = await Chat.create(chatData);

          const fullChat = await Chat.findOne({ _id: createChat._id }).populate(
            "users",
            ["-password", "-verified", "-emailToken"]
          );

          //   console.log(fullChat);

          return res.status(200).json({ success: true, message: fullChat });
        } catch (error) {
          return res.status(500).json({ success: false, message: "ok" });
        }
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: "okkkk" });
    }
  },

  fetchChat: async (req, res) => {
    try {
      const allChat = await Chat.find({
        users: { $elemMatch: { $eq: req.user._id } },
      })
        .populate("users", ["-password", "-verified", "-emailToken"])
        .populate({
          path: "latestMessage",
          populate: { path: "sender", select: "username avatar " },
        })
        .sort({ updatedAt: -1 });

      return res.status(200).json({ success: true, chats: allChat });
    } catch (error) {
      return res.status(500).json({ success: false, chats: error });
    }
  },
};

module.exports = chatController;
