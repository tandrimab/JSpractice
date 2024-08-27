/*
Given two arrays, find the intersection(items occur in both arrays)

    arrays are not sorted, and might have duplicates.
    you can modify the arrays
    you can return the items in any order, but without duplicates.

This is an easy problem, What is the time & space complexity of your approach?

*/


function getIntersection(arr1, arr2) {
  let a = new Set(arr1);
  let b = new Set(arr2);
  return [...a].filter((a) => b.has(a));
}
