/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let resultCached = {};
    return function(...args) {
        const iter = JSON.stringify(args);
        if (iter in resultCached) return resultCached[iter];
        let temp = fn(...args);
        resultCached[iter] = temp;
        return temp;
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */