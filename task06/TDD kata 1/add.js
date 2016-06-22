module.exports = function add (str) {

  'use strict';

  if (!str) return 0;

  let delimeter = str.match(/\/\/(.)\n/);
  if (delimeter && delimeter.length === 2) {
    str = str.replace(/\/\/.\n/, '');
    delimeter = delimeter[1];
  }
  else delimeter = /,|\n/;

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
