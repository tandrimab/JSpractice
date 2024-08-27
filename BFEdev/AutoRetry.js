// const p1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let val = Math.trunc(Math.random() * 10);
//       if (val > 7) {
//         resolve(val);
//       } else {
//         reject(val);
//       }
//     }, 500);
//   });

// function autoRetry(fn, num = 3) {
//   const interval = setInterval(async () => {
//     if (num === 0) {
//       clearInterval(interval);
//       throw new Error("Limit exceeded");
//     } else {
//       try {
//         num--;
//         const result = await fn();
//         clearInterval(interval);
//         console.log("Success", result);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }, 1000);
// }

// autoRetry(p1, 3);

/*
  
For a web application, fetching API data is a common task.

But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

One approach to handle this is auto retry when network error occurs.

You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.

For the problem here, there is no need to detect network error, you can just retry on all promise rejections.
*/

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return new Promise((resolve, reject) => {
        const fetcherRetry = (maximumRetryCount) => {
            return fetcher().then(data => resolve(data)).catch(e => {
                if (maximumRetryCount === 0) {
                    reject(e)
                } else {
                    fetcherRetry(maximumRetryCount - 1)
                }
            })
        }
        fetcherRetry(maximumRetryCount)
    })
}