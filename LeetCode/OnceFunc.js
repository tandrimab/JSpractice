var once = function(fn) {
    let count = 1;
    return function(...args){
        if (count > 1) return;
        count++;
        return fn(...args);
    }
};

let fn = (a,b,c) => (a + b + c)

let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn