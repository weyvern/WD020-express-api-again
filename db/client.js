import pg from 'pg';
const { Pool } = pg;
const connectionString = process.env.PG_CONN;

const pool = new Pool({
  connectionString
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

export default pool;
