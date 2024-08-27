/*
    Q1. What will be the o/p?
*/
function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null), // #1
};

user.g();

/*
    Ans: null
    Reason: at #1 this is already bounded to null, and since bind is hard fixed, it cannot be changed.
*/

/*
    Q2. Can we change this by additional binding?

    What will be the output?
*/

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();

/*
    Ans: John
    Reason: It remembers the context and arguments at creation time and cannot be re-bound.
*/

/*
    Q3. There’s a value in the property of a function. Will it change after bind? Why, or why not?
*/
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

console.log(bound.test); // what will be the output? why?

/*
  Ans: The answer: undefined.

The result of bind is another object. It does not have the test property.

*/

/*
  Q4. The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

But it leads to an error. Why?

Fix the highlighted line for everything to start working right (other lines are not to be changed).

*/

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user1.loginOk, user1.loginFail);

/*
    Q5: The task is a little more complex variant of Fix a function that loses "this".

The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).

What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

*/

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(_, _); // ?

/*
    Either use a wrapper function, an arrow to be concise:

askPassword(() => user.login(true), () => user.login(false));

Now it gets user from outer variables and runs it the normal way.

Or create a partial function from user.login that uses user as the context and has the correct first argument:

    askPassword(user.login.bind(user, true), user.login.bind(user, false));

Chapter

    Advanced work
  */


// Top-level 'this' is bound to 'globalThis' in scripts.
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// The 'this' parameter of 'getX' is bound to 'module'.
console.log(module.getX()); // 81

const retrieveX = module.getX;
// The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
console.log(retrieveX()); // 9

// Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
