const express = require("express");
const router = express.Router();
const bookmarks = require("../services/bookmarks");

/* GET bookmarks listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await bookmarks.getMultiple(req.query.page));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await bookmarks.getBookmark(req.params.id));
  } catch (err) {
    next(err);
  }
});

/* POST bookmarks */
router.post("/", async function (req, res, next) {
  try {
    console.log("Entering the router PUT TRY BLOCK");
    console.log("req.body:");
    console.log(req.body);
    console.log(Object.keys(req.body).length);
    res.json(await bookmarks.create(req.body));
  } catch (err) {
    console.error(`Error while writing bookmark `, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  console.log("Entering the router PUT part");
  try {
    console.log("Entering the router PUT TRY BLOCK");
    console.log("req.params.id:" + req.params.id);
    console.log("req.body:");
    console.log(req.body);
    console.log(Object.keys(req.body).length);
    res.json(await bookmarks.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating the Bookmark`, err.message);
    next(err);
  }
});

/* DELETE Bookmark */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await bookmarks.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting the bookmark`, err.message);
    next(err);
  }
});

module.exports = router;
