const pg = require("pg");
let pool;

// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg:
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: `postgres://myzbmiujljjcrx:f47c4591cb98daba1a33a081d0de0e05490a71a984cff5d05739fe1b0d715558@ec2-3-217-146-37.compute-1.amazonaws.com:5432/dcprn97d4jsnge`,
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
