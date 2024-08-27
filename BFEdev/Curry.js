function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function(...args2) {

        return curried(...args, ...args2)
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c;
}

let c = curry(sum);

console.log(c(1)(2,3))

// c1()
