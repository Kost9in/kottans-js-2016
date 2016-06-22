function reduce(arr, func, result, index) {
  if (typeof index == 'undefined') index = 0;
  if (index >= arr.length) return result;
  result = func(result, arr[index], arr);
  index++;
  return reduce(arr, func, result, index);
}

module.exports = reduce;
