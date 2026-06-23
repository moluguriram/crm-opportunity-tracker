const express = require("express");

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

const validate = require("../middleware/validationMiddleware");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validate,
  loginUser
);

router.get(
  "/me",
  protect,
  getMe
);

module.exports = router;