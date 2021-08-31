const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// SELECT RECORDS FROM DB

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  // console.log("Entering getMultiple");
  // console.log("====================");
  // console.log("offset" + offset);
  // console.log("list per page" + config.listPerPage);
  const rows = await db.query(
    `SELECT id, category, generalIcon, generalURL, bookmarkState, bookmark, bookmarkURL, author, bookmarkColor, bookmarkPicture, bookmarkServer, serverData, extraData, created_at, updated_at FROM gm_bookmarks LIMIT ?,?`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// POST VALIDATION OF THE TO BE INTRODUCED DATA

function validateCreate(bookmark) {
  let messages = [];

  console.log(bookmark);

  if (!bookmark) {
    messages.push("No object is provided");
  }

  if (!bookmark.bookmark) {
    messages.push("bookmark is empty");
  }

  if (!bookmark.author) {
    messages.push("bookmark is empty");
  }

  if (bookmark.bookmark && bookmark.bookmark.length > 255) {
    messages.push("bookmark cannot be longer than 255 characters");
  }

  if (bookmark.author && bookmark.author.length > 255) {
    messages.push("Author name cannot be longer than 255 characters");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(bookmark) {
  validateCreate(bookmark);

  const result = await db.query(
    "INSERT INTO gm_bookmarks (category, generalIcon, generalURL, bookmarkState, bookmark, bookmarkURL, author, bookmarkColor, bookmarkPicture, bookmarkServer, serverData, extraData, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      bookmark.category,
      bookmark.generalIcon,
      bookmark.generalURL,
      bookmark.bookmarkState,
      bookmark.bookmark,
      bookmark.bookmarkURL,
      bookmark.author,
      bookmark.bookmarkColor,
      bookmark.bookmarkPicture,
      bookmark.bookmarkServer,
      bookmark.serverData,
      bookmark.extraData,
      bookmark.created_at,
      bookmark.updated_at,
    ]
  );

  let message = "Error in creating bookmark";

  if (result.affectedRows) {
    message = "bookmark created successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
};
