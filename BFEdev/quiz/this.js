// This is a JavaScript Quiz from BFE.dev


const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  
  console.log(obj.a) //1
  obj.b() // 1
  ;(obj.b)() // 1
  const b = obj.b // we lost scope. now b is part of window object in non-strict mode and undefined in strict mode.
  b() // undefined
  obj.b.apply({a: 2}) // 2
  obj.c() //1
  obj.d() // undefined since arrow function lexically wrapped with the context of obj which is undefined in strict mode and window in non-stric mode
  ;(obj.d)() // ; will be skipped and it will still print undefined.
  obj.d.apply({a:2}) // undefined arrow function ignores call, apply, bind.
  obj.e() // undefined IIFE will be invoked at the time during the object creation and when the obj not even has been created. so its scope is the global scope. and hence the arrow function it returns has the global scope. 
  ;(obj.e)() // undefined
  obj.e.call({a:2}) //  undefined arrow function ignores call, apply, bind.
  obj.f()() // 1
  ;(obj.f())() //1
  obj.f().call({a:2}) // 1