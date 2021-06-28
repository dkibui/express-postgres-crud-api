function db() {
  const { Pool } = require("pg")
  const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })
  return pool
}

module.exports = db

// you can also use async/await
// const res = await pool.query("SELECT NOW()")
// await pool.end()
