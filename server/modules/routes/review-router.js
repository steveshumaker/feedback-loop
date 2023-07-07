const express = require("express");
const postReview = require("./post-review.js");

const router = express.Router();

router.post("/", postReview);

module.exports = router;