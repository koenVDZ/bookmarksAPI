function getOffset(currentPage = 1, listPerPage) {
  console.log("Entering getOffset Function");
  console.log("===========================");
  console.log("parseInt(currentPage - 1):" + parseInt(currentPage - 1));
  console.log("[parseInt(listPerPage)]:" + [parseInt(listPerPage)]);
  return parseInt(currentPage - 1) * [parseInt(listPerPage)];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
};
