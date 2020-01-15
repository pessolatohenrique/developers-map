convertStringToArray = arrayStr => {
  return arrayStr.split(",").map(item => item.trim());
};

module.exports = convertStringToArray;
