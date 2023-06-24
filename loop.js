const numbers = [12, 20, 52, 59];
// for(const number of numbers) {
//     console.log(number);
// }


// 1. for of can not used with objects 
const botte = {color: 'yellow', price: 500, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(botte);
// console.log(keys);
/*
3. ways to read object properties
 3.1- bottle.color
 3.2- bottle['color']
 3.3- bottle[key]
*/
for(const key of keys){
    // console.log(key, botte[key]);
}

// for in loop
for(const key in botte){
    const value = botte[key];
    // console.log(key, value);
}

// Advanced
const pair = Object.entries(botte);
console.log(pair);
for(const [key, value] of Object.entries(botte)){
    console.log(key, value);
}