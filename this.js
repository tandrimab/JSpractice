this.who = 'world'
const obj = {
    who: 'World',
    sayHi: function() {
        console.log(`Hello, ${this.who}`);
    },
    sayBye: () => {
        console.log(`Bye, ${this.who}`);
    }
}

obj.sayHi(); //Hello, World
obj.sayBye();
// const fn = obj.sayBye.bind(obj) //Hello, world

// fn()