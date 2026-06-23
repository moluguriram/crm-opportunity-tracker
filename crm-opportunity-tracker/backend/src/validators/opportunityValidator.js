const { body } = require("express-validator");

const createOpportunityValidation = [
  body("customerName")
    .notEmpty()
    .withMessage("Customer name is required"),

  body("requirement")
    .notEmpty()
    .withMessage("Requirement is required"),

  body("estimatedValue")
    .optional()
    .isNumeric()
    .withMessage("Estimated value must be numeric"),

  body("contactEmail")
    .optional()
    .isEmail()
    .withMessage("Invalid email"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority"),

  body("stage")
    .optional()
    .isIn([
      "New",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Won",
      "Lost",
    ])
    .withMessage("Invalid stage"),
];

module.exports = {
  createOpportunityValidation,
};