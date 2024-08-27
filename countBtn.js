/* Method 1 */

document.getElementById('click').addEventListener('click', function() {    
     console.log(count())
})

function captureCount() {
    let x = 0;
    return function() {
        return ++x;
    }
}

let count = captureCount();


/* Method 2 

function countEventListener() {
    let x =0;
    document.getElementById('click').addEventListener('click', function() {
        console.log(++x)
    })
    
}

countEventListener();
*/