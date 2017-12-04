'use strict';
const happy = new Promise(function (fulfill, reject) {

  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});


function onReject(error) {
  console.log(error.message);
}

happy.then(null, onReject);