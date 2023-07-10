const pool = require('../pool.js');
const QUERY = `UPDATE feedback SET flagged = $1 WHERE id = $2;`;

function flagReview(req, res) {
  let id = Number(req.params.id);
  let flagged = req.body.flagged;
  pool.query(QUERY, [flagged, id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    alert(error);
    console.log('Error: ', error);
    res.sendStatus(500);
  });
}

module.exports = flagReview;