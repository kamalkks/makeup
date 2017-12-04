// Creating a Promise
// A Promise object is created using the new keyword and its constructor. This constructor takes as its argument a function, called the "executor function". This function should take two functions as parameters. The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value. The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object.

// const myFirstPromise = new Promise((resolve, reject) => {
//   // do something asynchronous which eventually calls either:
//   //
//   //   resolve(someValue); // fulfilled
//   // or
//   //   reject("failure reason"); // rejected
// });


'use strict';
const happy = new Promise(function (diamond, reject) {

  setTimeout(function () {
    diamond('FULFILLED!');
  }, 300);
});

happy.then(console.log);
