/*
    There is Event Emitter in Node.js, Facebook once had its own implementation but now it is archived.

You are asked to create an Event Emitter Class

const emitter = new Emitter()

It should support event subscribing

const sub1  = emitter.subscribe('event1', callback1)const sub2 = emitter.subscribe('event2', callback2)// same callback could subscribe // on same event multiple timesconst sub3 = emitter.subscribe('event1', callback1)

emit(eventName, ...args) is used to trigger the callbacks, with args relayed

emitter.emit('event1', 1, 2);// callback1 will be called twice

Subscription returned by subscribe() has a release() method that could be used to unsubscribe

sub1.release()sub3.release()// now even if we emit 'event1' again, // callback1 is not called anymore
*/

// please complete the implementation
class EventEmitter {
  mapped = new Map();

  subscribe(eventName, callback) {
    if (this.mapped.has(eventName)) {
      this.mapped.get(eventName).push(callback);
    } else {
      let temp = [];
      temp.push(callback);
      this.mapped.set(eventName, temp);
    }

    let release = function () {
      if (!this.mapped.has(eventName)) return;
      let callbacks = this.mapped.get(eventName);
      if (callbacks) {
        let index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);

        if (!callbacks.length) {
          this.mapped.delete(eventName);
        } else {
          this.mapped.set(eventName, callbacks);
        }
      }
    };

    release = release.bind(this);

    return {
      release,
    };
  }

  emit(eventName, ...args) {
    let result = [];
    if (this.mapped.has(eventName)) {
      this.mapped.get(eventName).forEach((element, _) => {
        result.push(element(...args));
      });
    }
    return result;
  }
}
