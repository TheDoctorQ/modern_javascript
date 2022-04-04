var moment = require('moment'); 
var Chance = require('chance');

console.log('in javascript')

console.log(moment().format("MMM Do YY"));




// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var my_random_string = chance.string();
console.log(my_random_string);

console.log('HELLOOOOOOO')
// js
// can't access files, because it runs on other people's computers


// nodejs
// can access files, cannot run in browser


// ruby
// has access to files, cannot run in browser
