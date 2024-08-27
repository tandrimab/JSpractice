class Person {
    props = {name: 'Tandrima'} //the field is always present among instances;
    constructor() {
        this.greet = this.greet.bind(this)
    }
    greet() {
        console.log(`Hi, this is ${this.props.name}`);
        
    }
}

let p = new Person();
// p.greet() //will work as expected. p is an instance of class Person. this refers to p when greet is invoked

let person1 = p.greet; //here this parameter of person1 is bound to global object (e.g window.person1) so when person1() is invoked the this is {} in non-strict mode and undefined in strict mode

//thus it will throw TypeError:  Cannot read properties of undefined (reading 'props')
// person1();

//hence its important to bind this with greet.

// let bindGreet = p.greet.bind(this)
// bindGreet()
person1()