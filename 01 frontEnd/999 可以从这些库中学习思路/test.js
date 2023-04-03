const _ = require("./lodash");


var abc = function (a, b, c, d, e) {
    return console.log('[a, b, c, d, e]', [a, b, c, d, e]);
};

var curried = _.curry(abc);

// => [1, 2, 3,4,5]
// curried(1)(2)(3)(4)(5);

// curried(1, 2,3)(4)(5);

// curried(1, 2, 3,4,5);

// Curried with placeholders.
curried(1, _, 3)(_)(2, _, _)(4)(5);
//   => [1, 2, 3, 4, 5]
