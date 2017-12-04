'use strict';
const happy = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});
happy.then(console.log);
console.log('MAIN PROGRAM');