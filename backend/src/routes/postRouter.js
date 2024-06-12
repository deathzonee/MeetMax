const express = require("express");
const router = express.Router();

const postController = require("../controller/postController");
const middleware = require("../middleware/usermiddleware");

router.post("/post", middleware.verifyToken, postController.createPostStatus);
router.get("/get-post", postController.getMyStatus);
router.get("/getallpost", postController.getAllStatus);
router.put(
  "/update-post",
  middleware.verifyToken,
  postController.updatePostStatus
);

router.put(
  "/likes-post",
  middleware.verifyToken,
  postController.likesPostStatus
);

router.delete(
  "/delete-post",
  middleware.verifyToken,
  postController.deletePostStatus
);

module.exports = router;
