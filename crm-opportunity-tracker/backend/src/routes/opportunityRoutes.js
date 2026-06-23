const express = require("express");

const {
  createOpportunity,
  getOpportunities,
  getOpportunity,
  updateOpportunity,
  deleteOpportunity,
} = require("../controllers/opportunityController");

const {
  createOpportunityValidation,
} = require("../validators/opportunityValidator");

const validate = require("../middleware/validationMiddleware");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.post(
  "/",
  createOpportunityValidation,
  validate,
  createOpportunity
);

router.get("/", getOpportunities);

router.get("/:id", getOpportunity);

router.put("/:id", updateOpportunity);

router.delete("/:id", deleteOpportunity);

module.exports = router;