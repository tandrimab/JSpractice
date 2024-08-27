function throttling(fn, delay, ...args) {
    let prev = 0;
    return () => {
        let now = new Date().getTime();
        let diff = now - prev;
        if (diff > delay) {
            fn(...args);
            prev = now;
        }
    }
}

document.getElementById("throttle").addEventListener('click', throttling(() => console.log('throattling'), 3000));