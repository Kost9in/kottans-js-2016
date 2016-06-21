'use strict';

// (() => {

//   if (typeof Object.deepAssign === 'function') return;

//   const isObject = (target) => typeof target === 'object' && Reflect.ownKeys(target).length > 0;

//   Object.defineProperty(Object, 'deepAssign', {
//     value: (target, ...sources) => {
//       let result = Object(target);
//       for (let source of sources) {
//         if (isObject(source)) {
//           Reflect.ownKeys(source).forEach((key) => {
//             if (source.propertyIsEnumerable(key)) {
//               if (isObject(source[key])) result[key] = Object.deepAssign(result[key], source[key]);
//               else result[key] = source[key];
//             }
//           });
//         }
//       }
//       return result;
//     },
//     writable: true,
//     configurable: true
//   });

// })();


var promises = [
  'test string',
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1'), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2'), 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 3'), 3000);
  })
];

Promise.map(promises, (result) => console.log(result))
.then(() => {
  console.log('done');
}, () => {
  console.log('bad')
});





