const express = require("express");
const postReview = require("./post-review.js");
const getReview = require("./get-reviews.js");
const deleteReview = require("./delete-review.js");
const flagReview = require("./flag-review.js")

const router = express.Router();

router.post("/", postReview);
router.get("/", getReview);
router.delete("/:id", deleteReview);
router.put("/:id", flagReview);

module.exports = router;
