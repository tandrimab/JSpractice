/**
 * cancel all timer from window.setTimeout
 */
const timerId = new Set();

const {setTimeout: _setTimeout, clearTimeout: _clearTimeout} = window;

window.setTimeout = function(callback, delay, ...args) {
    const wrapper = () => {
        callback(...args);
        _clearTimeout(timer);
        timerId.delete(timer);
    }
    let timer = _setTimeout(wrapper, delay, ...args);
    timerId.add(timer);
    return timer;
}

window.clearTimeout = function(id) {
    timerId.delete(id);
    _clearTimeout(id);
}

function clearAllTimeout() {
    timerId.forEach((id, _) => {
        timerId.delete(id)
        _clearTimeout(id)
    })
}   