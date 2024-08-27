function compact(obj) {
    if (!obj) {
        return false;
    }
    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
        let res = [];

        for (let i of obj) {
            let temp = compact(i);

            if (temp) {
                res.push(temp)
            }
        }
        return res;
    } else {
        let res = {};

        for (let i in obj) {
            if (i) {
                let temp = compact(obj[i]);
                if (temp)  res[i] = temp;
            }
        }

        return res;
    }
}

let obj = {"a": null, "b": [false, 1]}
console.log(compact(obj))