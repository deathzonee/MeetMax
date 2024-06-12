const express = require("express");
const router = express.Router();

const commentPostController = require("../controller/commentPostController");
const middleware = require("../middleware/usermiddleware");

router.post(
  "/create-comment",
  middleware.verifyToken,
  commentPostController.createComment
);
router.get("/get-comment", commentPostController.getComment);
router.put(
  "/update-comment",
  middleware.verifyToken,
  commentPostController.updateComment
);

router.delete(
  "/delete-comment",
  middleware.verifyToken,
  commentPostController.deleteComment
);
module.exports = router;
