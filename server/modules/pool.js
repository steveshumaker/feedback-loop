const pg = require("pg");
let pool;

// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg:
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: `postgres://ssiykpqwungpzc:8b1b4d8c9b3d4d0547912ffad550d95888ec75b5e5cb37815d3740999b5e8090@ec2-34-238-201-192.compute-1.amazonaws.com:5432/dfsoov41rqvi3f`,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is
// also running on our computer (localhost)
else {
  pool = new pg.Pool({
    host: "localhost",
    port: 5432,
    database: "prime_feedback",
  });
}

module.exports = pool;
