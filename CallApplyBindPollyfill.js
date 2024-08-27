const name = {
    firstname: "Tandrima",
    lastname: "Bhattacharjee",
    // printName: function(location) {
    //     console.log(this.firstname + " " + this.lastname + " is from " + location);
    // }
}

const name2 = {
    firstname: "Akash",
    lastname: "Ghosh"
}

let printName = function(hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " is from " + hometown + ", " + state + ", " + country);
} 


printName.call(name2, "Kolkata");

printName.apply(name, ["Shyambazar", "Kolkata"]);

let myPrintName = printName.bind(name, "Shyambazar");

myPrintName();

Function.prototype.myBind = function(...args) {
    let obj = this;
    return function(...args2) {
        obj.apply(args[0], [...args.slice(1), ...args2])
    }
}

let myBindCopy = printName.myBind(name, "Kolkata")

myBindCopy("West Bengal", "India");