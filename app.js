const express = require("express");
const path = require("path");
// const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const bookmarksRouter = require("./routes/bookmarks");
// const cors = require("cors");

const app = express();
// app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
// app.use(cors({ origin: "http://localhost" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/bookmarks", bookmarksRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = app;
