function basic() {
    console.log('task started');

    queueMicrotask(() => console.log('microtask started'));

    console.log('Task ended');
}

// basic();


function timeoutMicrotask() {

    let callback = () => console.log('here callback is called');

    let urgentCallback = () => console.log('Urgent callback is called');

    console.log('function started');

    setTimeout(callback, 0);

    queueMicrotask(urgentCallback);

    console.log('Program ended');

}

// timeoutMicrotask();


function extended() {
    let callback = () => console.log("Regular timeout callback has run");

    let urgentCallback = () => console.log("*** Oh noes! An urgent callback has run!");

    let doWork = () => {
        let result = 1;

        queueMicrotask(urgentCallback);

        for (let i = 2; i <= 10; i++) {
            result *= i;
        }
        return result;
    };

    console.log("Main program started");
    setTimeout(callback, 0);
    console.log(`10! equals ${doWork()}`);
    console.log("Main program exiting");

}

extended()