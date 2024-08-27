var inorderTraversal = function* (arr) {
    for(const i of arr) {
        if (Array.isArray(i)) {
            yield* inorderTraversal(i)
        } else {
            yield i
        }
    }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
