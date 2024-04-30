// const _ = require("./lodash");
const Lazy = require("./lazy");


// var abc = function (a, b, c, d, e) {
//     return console.log('[a, b, c, d, e]', [a, b, c, d, e]);
// };

// var curried = _.curry(abc);

// => [1, 2, 3,4,5]
// curried(1)(2)(3)(4)(5);

// curried(1, 2,3)(4)(5);

// curried(1, 2, 3,4,5);

// Curried with placeholders.
// curried(1, _, 3)(_)(2, _, _)(4)(5);
//   => [1, 2, 3, 4, 5]


// var a = _.uniq([2, 8, 67, 13, 54, 3, 2, 2])
// console.log('a', a)


// var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// console.log('zipped', zipped)
// => [['a', 1, true], ['b', 2, false]]

// var g=_.groupBy([6.1, 4.2, 6.3], Math.floor);
// console.dir('g', g)


// var g=_.groupBy([6.1, 4.2, 6.3], Math.floor);
// console.dir('g', g)


// var compiled = _.template('hello <%= user %>!');
// compiled =(function anonymous(_) {
//     //# sourceURL=lodash.templateSources[0]
//     return function(obj) {
//         obj || (obj = {});
//         var __t, __p = '';
//         with (obj) {
//         __p += 'hello ' +
//         ((__t = ( user )) == null ? '' : __t) +
//         '!';

//         }
//         return __p
//     }
// })

// console.log(compiled({ 'user': 'fred' }));


// var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };

// _.result(object, 'a[0].b.c1');


// Lazy.generate(Math.random)
//     // .map(function (e) { return Math.floor(e * 1000) + 1; })
//     // .uniq()
//     .take(2)
//     .each(function (e) { console.log(e); });

// 浓厚历史
// 星辰大海
// 现实喜怒哀乐  