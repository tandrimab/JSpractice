const checkInstanceOf = function(obj, className) {
    if (obj === null || obj === undefined || typeof className !== 'function') {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);
    while(proto !== null) {
        if (proto === className.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto)

    }
}

class Animal{};
class Dogs extends Animal{};

console.log(checkInstanceOf(new Dogs(), Animal));
