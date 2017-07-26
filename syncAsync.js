//Synchronous && Asynchronous in Node.js
/*
    Synchronous & Asynchronous are ways of executing code in different ways.

    The difference between Synchronous & Asynchronous,
     Synchronous is executing the code in order also block the code after it until execute itself.
     Asynchronous is executing the code in disorder depends of the amount of the code the less one executed first then so on and does not block the code after it.

For example for loop is executing the code in order:
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
// It will print 1 2 3 4 5 6 7 8 9 this means in order
*/
//Here are some practical examples

const fs = require('fs');
//These are Synchronous
const syncEx = fs.readFileSync('./data.txt', 'utf-8');
console.log(syncEx + '\n'); //execute first
console.log('Hello world'); //execute second

// these are Asynchronous
// fs.readFile('./data.txt', 'utf-8',function (err, data) {
//     console.log(data);          //execute second
//  });
// console.log(`Hello world \n`); //execute first
