var areDeeplyEqual = function(o1, o2) {
    if (o1 === null || o2 === null) {
        return o1 === o2
    }
    if (typeof o1 !== typeof o2) {
        return false;
    }
    if (typeof o1 !== 'object') {
        return o1 === o2
    }
    if (Array.isArray(o1) && Array.isArray(o2)) {
        if (o1.length === o2.length) {
            for(let i = 0; i<o1.length; i++) {
                return areDeeplyEqual(o1[i], o2[i])
            }

        } else {
            return false;
        }
    } else if (typeof o1 === 'object' && typeof o2 === 'object') {
        if (Object.keys(o1).length === Object.keys(o2).length) {
            for (let i in o1) {
                return o2.hasOwnProperty(i) && areDeeplyEqual(o1[i], o2[i])
            }
        } else {
            return false;
        }
    } else {
        return false
    }
}

let o1 = {"x":null, "y":["1","2","3"]}, o2 = {"x":null, "y":[1,2,3]}
console.log(areDeeplyEqual(o1, o2));
