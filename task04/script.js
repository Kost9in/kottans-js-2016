'use strict';

(() => {

  if (typeof Object.deepAssign === 'function') return;

  const isObject = (target) => typeof target === 'object' && Reflect.ownKeys(target).length > 0;

  Object.defineProperty(Object, 'deepAssign', {
    value: (target, ...sources) => {
      let result = Object(target);
      for (let source of sources) {
        if (isObject(source)) {
          Reflect.ownKeys(source).forEach((key) => {
            if (source.propertyIsEnumerable(key)) {
              if (isObject(source[key])) result[key] = Object.deepAssign(result[key], source[key]);
              else result[key] = source[key];
            }
          });
        }
      }
      return result;
    },
    writable: true,
    configurable: true
  });

})();

const test1 = Object.deepAssign(null); // {}
const test2 = Object.deepAssign(null, test1, { answer: 42, delorean: new Date(1985, 9, 26) }); // { answer: 42, delorean: Date(1985, 9, 26) }
const test3 = Object.deepAssign({}, test2, { delorean: new Date(2015, 9, 21) }); // { answer: 42, delorean: Date(2015, 9, 21) }
