const express = require("express");
const router = express.Router();

const messageController = require("../controller/messageController");
const middleware = require("../middleware/usermiddleware");

router.post(
  "/send-message",
  middleware.verifyToken,
  messageController.sendMessage
);
router.get("/all-message/:chatId", messageController.fetchAllMessage);
// router.get("/fetch-message", );

module.exports = router;
