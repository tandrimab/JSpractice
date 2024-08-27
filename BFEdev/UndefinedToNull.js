function undefinedToNull(arg) {
    // your code here
    if (typeof arg === 'undefined') {
        return null;
    }
    if (arg === null || typeof arg !== 'object') {
        return arg;
    }
    if (Array.isArray(arg)) {
        let res = [];
        for (let i of arg) {
            let temp = undefinedToNull(i)
            res.push(temp)
        }
        return res;
        
        
    }
     else {
        let res = {};
        for (let i in arg) {
            let temp = undefinedToNull(arg[i]);
            res[i] = temp
        }
        return res;
    }
  }

  console.log(undefinedToNull(['BFE.dev', undefined, null, {a: ['BFE.dev', undefined]}] ))