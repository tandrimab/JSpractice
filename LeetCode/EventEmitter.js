class EventEmitter {
    eventsMap = new Map(); 
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.eventsMap.has(eventName)) {
            let temp = new Set();
            this.eventsMap.set(eventName, temp)
        }
        this.eventsMap.get(eventName).add(callback)
        return {
            unsubscribe: () => {
                this.eventsMap.get(eventName).delete(callback)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let result = [];
        if (this.eventsMap.has(eventName)) {
            this.eventsMap.get(eventName) && this.eventsMap.get(eventName).forEach((element, _) => {
                result.push(element(...args))
            });
        }
        return result;
    }
}

 const emitter = new EventEmitter();

 // Subscribe to the onClick event with onClickCallback
 function onClickCallback() { return 99 }
 const sub = emitter.subscribe('onClick', onClickCallback);

 console.log(emitter.emit('onClick')); // [99]
 sub.unsubscribe(); // undefined
 emitter.emit('onClick'); // []




// // please complete the implementation
// class EventEmitter {
//     mapped = new Map()
  
//     subscribe(eventName, callback) {
//       if (this.mapped.has(eventName)) {
//         this.mapped.get(eventName).push(callback)
//       } else {
//         let temp = [];
//         temp.push(callback)
//         this.mapped.set(eventName, temp)
//       }
  
//       return {
//         release: function () {
//           this.mapped.get(eventName).map((item, index) => {
//             if (item === callback) {
//               this.mapped.get(eventName).splice(index, 1)
//             } else {
//               return item
//             }
//           })
//         }
//       }
//     }
  
//     emit(eventName, ...args) {
//       let result = [];
//       if (this.mapped.has(eventName)) {
//         this.mapped.get(eventName).forEach((element, _) => {
//           result.push(element(...args))
//         })
//       }
//       return result;
//     }
//   }