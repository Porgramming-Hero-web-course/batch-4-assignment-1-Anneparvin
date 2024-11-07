<!-- 2...........How to handle asynchronous operations using async/await over callback/promise TypeScript. -->

Answer : A promise in TypeScript is an object representing the eventual completion or failure of an asynchronous operation. A promise is typically created using the Promise constructor, which takes a callback function with resolve and reject parameters. The asynchronous operation is performed inside this callback.


Here's a concise explanation of handling asynchronous operations with async/await, callback, and promise in TypeScript:

    #Example with Async/Await:typescript

async function getData() {
    try {
        const data = await fetchData(); // Wait for promise to resolve
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


    #Example with Callback:
function fetchData(callback: (error: any, data?: string) => void) {
    setTimeout(() => callback(null, "Data fetched"), 1000);
}


    #Example with Promise:
fetchData().then(data => console.log(data)).catch(error => console.error(error));


    #Summary:
Async/Await: is cleaner and easier to read.
Callbacks: can lead to complex nesting ("callback hell").
Promises: offer a better structure but require .then() and .catch().

