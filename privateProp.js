class Demo {
    #name;
    constructor(name) {
        this.#name = name;
    }
    static isExist(obj) {
        if (#name in obj) return obj.#name;
        return "Object must be an instance of Demo"
    }
}

class SubDemo extends Demo {
    #age;
    constructor(age, name) {
        super(name);
        this.#age = age;
    }
}


const demo = new Demo("tandrima");
const age  = new SubDemo(28, 'tandrima');
console.log(demo);
// console.log(Demo.isExist({}));