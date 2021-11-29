import pg from 'pg';
const { Pool } = pg;
const connectionString = process.env.PG_CONN;

const pool = new Pool({
  connectionString
});

export default pool;
