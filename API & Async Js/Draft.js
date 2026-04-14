// Promises and async JS

// async JS is a way to write code that doesn't block the main thread 
// while waiting for a response from an API or a database.
// It allows us to write code that is more efficient and responsive.

// await is a keyword that can only be used inside an async function. 
// It allows us to wait for a promise to resolve before moving on to the next line of code.

// promises : A promise is an object that represents the eventual 
// completion or failure of an asynchronous operation and its resulting value.

// Restaurant Analogy:
// Imagine you go to a restaurant and place an order. 
// The waiter takes your order and tells you it will be ready in 20 minutes.
// In the meantime, you can do other things like chat with your friends or check your phone.
// The waiter is like a promise. It promises to bring you your food in 20 minutes.
// You can choose to wait for the food or do other things while waiting.


// // Example of a promise:
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved!');
//     }, 2000)
// })

// myPromise.then((message) => {
//     console.log(message)
// })

// Example of resolving a promise with async/await:
// async function getRandomActivity() {
//     const response = await fetch('https://apis.scrimba.com/bored/api/activity'); // Promise that resolves to the response of the API call
//     const data = await response.json(); // Promise that resolves to the JSON data
    
//     for (let key in data) {
//         console.log(`${key}: ${data[key]}`);
//     }
    
// }
// getRandomActivity()

// // Handling rejected promises with traditional .then() and .catch():

// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => {
//         for (let key in data) {
//             console.log(`${key}: ${data[key]}`)
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching random activity:', error)
//     })

// // Handling rejected promises with async/await and try/catch:

// try {
//     const response = await fetch('https://apis.scrimba.com/bored/api/activity');
//     const data = await response.json();
//     console.log(data);

// }catch (error) {
//     console.error('Error fetching random activity:', error)
// }finally {
//     console.log('operation completed')
// }


// response.ok is a property of the response object that indicates whether the HTTP request was successful (status code in the range 200-299) or not.
// If response.ok is true, it means the request was successful and we can proceed to parse the response data. 
// If response.ok is false, it means there was an error with the request (e.g., 404 Not Found, 500 Internal Server Error), and we should handle that error accordingly.

try {
    const response = await fetch('https://apis.scrimba.com/bored/api/activities');
    if (!response.ok) {
        throw new Error(`HTTP error!`);
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error('Error fetching random activity:', error);
} finally {
    console.log('operation completed');
}