// Currying transforms a function that takes multiple arguments into a sequence of functions that take one argument each.

function add(a) {
  console.log('a ' + a);
  return function (b) {
    console.log('b ' + b);
    return function (c) {
      console.log('c ' + c);
      return a * b * c;
    };
  };
}

console.log(add(5)(2)(3)); // 30
