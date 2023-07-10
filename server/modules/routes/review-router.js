const express = require("express");
const postReview = require("./post-review.js");
const getReviews = require("./get-reviews.js")

const router = express.Router();

router.post("/", postReview);
router.get("/", getReviews);

module.exports = router;