const Opportunity = require("../models/Opportunity");

// Create Opportunity
const createOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.create({
      ...req.body,
      owner: req.user._id,
    });

    res.status(201).json(opportunity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Opportunities of Logged-in User
const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({
      owner: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(opportunities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Opportunity
const getOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(
      req.params.id
    );

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    if (
      opportunity.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    res.json(opportunity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Opportunity
const updateOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(
      req.params.id
    );

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    if (
      opportunity.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const updated =
      await Opportunity.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Opportunity
const deleteOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(
      req.params.id
    );

    if (!opportunity) {
      return res.status(404).json({
        message: "Opportunity not found",
      });
    }

    if (
      opportunity.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    await opportunity.deleteOne();

    res.json({
      message:
        "Opportunity deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOpportunity,
  getOpportunities,
  getOpportunity,
  updateOpportunity,
  deleteOpportunity,
};