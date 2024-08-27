async function getData() {
    return pr;
}

const pr1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Promise 1 resolved!!")
    }, 5000)`                                                `` qc1azscwvsvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwedbbbbbbbbb
})

const pr2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Promise 2 resolved!!")
    }, 10000)
})

const pr3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Promise 3 resolved!!")
    }, 20000)
})

async function returnPr (val) {
    console.log(val);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, 20000)
    });
}

async function promiseTest() {
    const test1 = await pr3; //20
    console.log(test1);

    const test2 = await pr2; //10
    console.log(test2);

    const test3 = await returnPr(test2); //10
    console.log(test3);
}

promiseTest()

