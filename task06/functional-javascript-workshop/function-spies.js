module.exports = (target, method) => {
  const spy = { count: 0 };
  const originalMethod = target[method];
  target[method] = function() {
    spy.count++;
    return originalMethod.apply(target, arguments);
  }
  return spy;
};
