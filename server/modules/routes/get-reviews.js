const pool = require('../pool.js');
const QUERY = "SELECT * FROM feedback ORDER BY id DESC;";

function getReviews(req, res) {
  pool.query(QUERY)
  .then((result) => {
    res.status(200).send(result.rows);
  })
  .catch((error) => {
    alert(error);
    console.log('Error: ', error);
    res.sendStatus(500);
  });
}

module.exports = getReviews;