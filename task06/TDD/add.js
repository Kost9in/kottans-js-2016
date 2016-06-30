module.exports = function add (str) {

  'use strict';

  if (!str) return 0;

  let delimeter = /,|\n/;

  let oneDelimeter = str.match(/\/\/(.)\n/);
  if (oneDelimeter && oneDelimeter.length === 2) {
    str = str.replace(/\/\/.\n/, '');
    delimeter = oneDelimeter[1];
  }
  let manyDelimeters = str.match(/\/\/(\[.*\])*\n/);
  if (manyDelimeters && manyDelimeters.length === 2) {
    str = str.replace(/\/\/(\[.*\])*\n/, '');
    let delimeters = manyDelimeters[1].substr(1, manyDelimeters[1].length - 2).split('][');
    delimeters = delimeters.map((item) => item.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
    delimeter = new RegExp(delimeters.join('|'));
  }

  const numbers = str.split(delimeter);
  if (numbers.length < 2) return parseInt(numbers[0]);
  let negatives = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) negatives.push(numbers[i]);
    if(numbers[i] <= 1000) sum += parseInt(numbers[i]);
  }

  if(negatives.length) throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
  return sum;

}
