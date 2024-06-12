const express = require("express");
const router = express.Router();

const chatController = require("../controller/chatController");
const middleware = require("../middleware/usermiddleware");

router.post("/access-chat", middleware.verifyToken, chatController.accessChat);
router.get("/fetch-chat", middleware.verifyToken, chatController.fetchChat);
// router.get("/fetch-chat", (req, res) => {
//   res.send("ok chay nhe");
// });

module.exports = router;
