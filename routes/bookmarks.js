const express = require("express");
const router = express.Router();
const bookmarks = require("../services/bookmarks");

/* GET bookmarks listing. */
router.get("/", async function (req, res, next) {
  try {
    // console.log("Entering router.get function:");
    // console.log("=============================");
    // console.log(req.query);
    res.json(await bookmarks.getMultiple(req.query.page));
  } catch (err) {
    next(err);
  }
});

/* POST bookmarks */
router.post("/", async function (req, res, next) {
  try {
    console.log("Req:");
    console.log(req.body);
    res.json(await bookmarks.create(req.body));
  } catch (err) {
    console.error(`Error while writing bookmark `, err.message);
    next(err);
  }
});

module.exports = router;
