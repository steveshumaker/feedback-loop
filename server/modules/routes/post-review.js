const pool = require("../pool.js");

const QUERY = `INSERT INTO feedback VALUES ($1, $2, $3, $4);`;

function postReview(req, res) {
  console.log('BODY -------- :', req.body)
  const [feeling, understanding, support, comments] = req.body;
  pool.query(QUERY, [feeling, understanding, support, comments])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(500)
  })
}

module.exports = postReview;