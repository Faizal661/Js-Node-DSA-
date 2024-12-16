function add(a) {
    //console.log('a ' + a);
    return function (b) {
       // console.log('b ' + b);
        return function (c) {
          //  console.log('c ' + c);
            return a * b * c;
        };
    };
}

console.log(add(5)(2)(3)); // 6
