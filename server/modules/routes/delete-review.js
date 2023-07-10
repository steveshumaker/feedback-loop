const pool = require('../pool.js');
const QUERY = `DELETE FROM feedback WHERE id = $1;`;

function deleteReview(req, res) {
  let id = Number(req.params.id);
  pool.query(QUERY, [id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    alert(error);
    console.log('Error: ', error);
    res.sendStatus(500);
  });
}

module.exports = deleteReview;