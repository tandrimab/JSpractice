/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((elem, acc) => acc += elem, 0 )
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${String(this.nums)}]`
}


const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
