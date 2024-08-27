/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise(async (resolve, reject) => {
        let result = new Array(functions.length).fill(null), count = 0;
        functions.forEach(async (elem, i) => {
            try {
                let val = await elem();
                result[i] = val;
                count++;
                if (count === functions.length) {
                    resolve(result);
                }
            } catch (err) {
                reject(err)
            }
        })

    })
};

let functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 3000)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 5000))
]

const promise = promiseAll(functions)
promise.then(console.log); // [42]