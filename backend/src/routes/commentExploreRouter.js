const express = require("express");
const router = express.Router();

const commentExploreController = require("../controller/commentExploreController");
const middleware = require("../middleware/usermiddleware");

router.post(
  "/create-commentExplore",
  middleware.verifyToken,
  commentExploreController.createCommentExplore
);
router.get("/get-commentExplore", commentExploreController.getCommentExplore);
router.put(
  "/update-commentExplore",
  middleware.verifyToken,
  commentExploreController.updateCommentExplore
);

// router.delete(
//   "/delete-comment",
//   middleware.verifyToken,
//   commentController.deleteComment
// );
module.exports = router;
