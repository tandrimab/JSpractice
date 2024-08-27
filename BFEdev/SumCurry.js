function sum(num) {
  const func = function (num2) {
    return sum(num + num2); //Because in case you want to use call `sum` function normally and get value out of it.`sum(1)(2)()` will return 3
  };
  func.valueOf = () => num;
  return func;
}

const sum1 = sum(1);
console.log(sum1(2) == 3);
console.log(sum1(3) == 4);
console.log(sum(1)(2)(3) == 6);
