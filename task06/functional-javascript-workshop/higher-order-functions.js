function repeat(func, count) {
  if (count) {
    func();
    repeat(func, count - 1);
  }
}

module.exports = repeat;
