const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

const middleware = require("../middleware/usermiddleware");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/verify", userController.verifyUser);
router.post("/forgot", userController.forgotPasswordUser);
router.get("/forgot-verify", userController.forgotVerifyUser);

router.get("/auth", middleware.verifyToken, userController.getUser);
router.get("/search", middleware.verifyToken, userController.getSearchtUser);
router.get("/current-user", middleware.verifyToken, userController.currentUser);
router.put(
  "/updatecurrent-user",
  middleware.verifyToken,
  userController.updateCurrentUser
);

router.post(
  "/update-avatar",
  middleware.verifyToken,
  userController.updateAvatarUser
);

router.post(
  "/update-coverImage",
  middleware.verifyToken,
  userController.updateCoverImageUser
);

module.exports = router;
