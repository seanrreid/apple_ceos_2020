const host = 'rajje.db.elephantsql.com',
  database = 'ohhdjrvp',
  user = 'ohhdjrvp',
  password = 'H5qkuqkn0ACVHaiGZyunDrs6jdSfbr4M';

const pgp = require('pg-promise')({
  query: function(e) {
    console.log('QUERY:', e.query);
  }
});

const options = {
  host: host,
  database: database,
  user: user,
  password: password
};

const db = pgp(options);

module.exports = db;
