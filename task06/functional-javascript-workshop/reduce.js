module.exports = (words) =>
  words.reduce((result, word) => {
    result[word] = result[word] ? result[word] + 1 : 1;
    return result;
  }, {});
