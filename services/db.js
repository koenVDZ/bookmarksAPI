const mysql = require("mysql2/promise");
const config = require("../config");
const pool = mysql.createPool(config.db);

async function query(sql, params) {
  // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  // console.log(sql);
  // console.log("++++");
  // console.log(params);
  // console.log("++++");
  const [rows, fields] = await pool.execute(sql, params);
  // console.log(rows);
  return rows;
}

module.exports = {
  query,
};
