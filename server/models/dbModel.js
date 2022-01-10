const { Pool } = require("pg");

const PG_URI =
  "postgres://qmukeztx:cbNkTLLQyPZMx0mxFFRlNDu2XrPswZCa@castor.db.elephantsql.com/qmukeztx";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: function (queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};

