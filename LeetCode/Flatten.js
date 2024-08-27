var flat = function (arr, n) {
  function flatten(arr, n) {
    let result =[];
    arr.forEach((elem) => {
      if (Array.isArray(elem) && n>0) {
        result.push(...flatten(elem, n-1))
      } else {
        result.push(elem)
      }
    });
    return result;
  }
  return flatten(arr, n);
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1;

console.log(flat(arr, n));
