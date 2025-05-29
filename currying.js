function curry(f) {
    return function (...args) {
        if (args.length >= f.length) {
            return f(...args)
        } else {
            return curry(f.bind(this, ...args))
        }
    }
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }

function infinite_curry(a) {
    return function(b) {
        if (b) {
            return infinite_curry(a+b)
        } else {
            return a
        }
    }
}

function curry_infinite_params(...a) {
    return function(...b) {
        if (b?.length) {
            return curry_infinite_params(...a, ...b)
        } else {
            return a.reduce((i,j) => i+j, 0)
        }
    }
}

console.log(infinite_curry(1)(2)(3)(4)())

console.log(curry_infinite_params(1,2,3)(4)(5,6)())

 const curriedJoin = curry(join)
 console.log(curriedJoin(1, 2, 3)) // '1_2_3'
 console.log(curriedJoin(1)(2, 3)) // '1_2_3'
 console.log(curriedJoin(1, 2)(3)) // '1_2_3'

