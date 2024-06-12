const express = require("express");
const router = express.Router();

const exploreController = require("../controller/exploreController");
const middleware = require("../middleware/usermiddleware");

router.post(
  "/create-explore",
  middleware.verifyToken,
  exploreController.creareExplore
);
router.get("/get-explore", exploreController.getExplore);
router.put(
  "/update-explore",
  middleware.verifyToken,
  exploreController.updateExplore
);
router.delete(
  "/delete-explore",
  middleware.verifyToken,
  exploreController.deleteExplore
);

router.get("/details-explore", exploreController.detailsExplore);
router.get("/classify-explore", exploreController.classifyExplore);

module.exports = router;
