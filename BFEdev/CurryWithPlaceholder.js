// Implementing currying with placeholder support
const curry = (fn) => {
    return function curried(...args) {
        // If enough arguments are provided, 
        // call the original function
        if (args.length >= fn.length &&
            !args.includes(curry.placeholder)) {
            return fn.apply(this, args);
        } else {
            // Otherwise, return a curried function 
            // with placeholder support
            return function (...nextArgs) {
                const combinedArgs = args.map(
                    arg => arg === curry.placeholder && 
                    nextArgs.length ? nextArgs.shift() : arg).
                    concat(nextArgs);
                return curried(...combinedArgs);
            };
        }
    };
};

// Placeholder symbol for 
// missing arguments
curry.placeholder = Symbol();

// Example: Curried function to 
// concatenate three strings
const concat3 = curry((a, b, c) => 
    `${a} ${b} ${c}`);

// Partial application using placeholders
const concatHello = concat3('Hello,', 
    curry.placeholder, 'World!');
console.log(concatHello('Welcome'));
console.log(concatHello('Greetings'));
