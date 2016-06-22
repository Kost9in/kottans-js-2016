import test from 'ava';
import add from './add';

test('Empty string', t => {
  t.is(add(''), 0);
});

test('One number', t => {
  t.is(add('5'), 5);
});

test('Two numbers', t => {
  t.is(add('5,3'), 8);
});

test('Unknown amount of numbers', t => {
  t.is(add('2,4,7,10'), 23);
});

test('Unknown amount of numbers width delimeter \\n', t => {
  t.is(add('2,4\n7,10'), 23);
});

test('Unknown amount of numbers width custom delimeter :', t => {
  t.is(add('//:\n2:4:7:10'), 23);
});

test('Unknown amount of numbers width custom delimeter !', t => {
  t.is(add('//!\n2!4!7!10'), 23);
});

test('Unknown amount of numbers width one negative number', t => {
  t.throws(() => add('2,4,-7,10'), 'Negatives not allowed: -7');
});

test('Unknown amount of numbers width custom delimeter ! and one negative number', t => {
  t.throws(() => add('//!\n2!4!-7!10'), 'Negatives not allowed: -7');
});

test('Unknown amount of numbers width many negatives numbers', t => {
  t.throws(() => add('2,-4,-7,-10'), 'Negatives not allowed: -4,-7,-10');
});

test('Unknown amount of numbers width custom delimeter ! and many negatives numbers', t => {
  t.throws(() => add('//!\n2!-4!-7!-10'), 'Negatives not allowed: -4,-7,-10');
});

test('Unknown amount of numbers with number bigger 1000', t => {
  t.is(add('2,4,1000,1001,7,10'), 1023);
});

test('Unknown amount of numbers width custom delimeter : and number bigger 1000', t => {
  t.is(add('//:\n2:4:1000:1001:7:10'), 1023);
});









