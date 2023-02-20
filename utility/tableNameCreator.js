const tableNameCreator = (tbl) => {
  // lowecase and trim
  let trimmedStr = tbl.trim().toLowerCase();
  // replace all special character
  let newStr = trimmedStr.replace(/[^\w\s]/gi, "");
  // remove multiple spce and add _
  let newStrSpce = newStr.replace(/\s+/g, "_");
  return newStrSpce;
};

module.exports = { tableNameCreator };
