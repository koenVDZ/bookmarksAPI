const express = require("express");
const router = express.Router();
const bookmarks = require("../services/bookmarks");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await bookmarks.getMultiple());
  } catch (err) {
    console.error(`Error while getting bookmarks `, err.message);
    next(err);
  }
});

module.exports = router;
