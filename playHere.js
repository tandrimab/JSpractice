function askPassword(ok, fail) {
  let password = ""
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

user.loginFail()

// askPassword(user.loginOk, user.loginFail);
