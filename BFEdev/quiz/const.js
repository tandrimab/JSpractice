function func() {
    const a = b = c = 1
  }
  func()
  console.log(typeof a, typeof b, typeof c)

  // for the assignment operator's associativity, it will work from right to left.
  // c is assigned to 1 with no var/let/const. hence c is globally scoped by default.
  // b = c . so same b is globally scoped.
  // const a = b. only a is properly typed which is bloack scoped as its been declared inside the function. and outside of it a doesn't exists so its undefined.

  // Note: in strict mode it will give reference error as it doesnt allow implicit globals.