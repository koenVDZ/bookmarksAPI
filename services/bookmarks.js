const db = require("./db");

async function getMultiple() {
  const data = await db.query("SELECT id, quote, author FROM gm_bookmarks");
  const meta = { page: 1 };

  return {
    data,
    meta,
  };
}

module.exports = {
  getMultiple,
};
