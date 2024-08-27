function debouncing(fn, delay, ...args) {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn, delay, ...args);
    }
}

document.getElementById("throttle").addEventListener('click', debouncing(() => console.log('debouncing'), 3000));