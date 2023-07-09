const pool = require("../pool.js");

const QUERY = `INSERT INTO feedback VALUES ($1, $2, $3, $4, $5);`;
let count = 1;

function postReview(req, res) {
  console.log("BODY -------- :", req.body);
  const review = req.body;
  pool
    .query(QUERY, [
      count + 1,
      review.feeling,
      review.understanding,
      review.support,
      review.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
}

module.exports = postReview;
