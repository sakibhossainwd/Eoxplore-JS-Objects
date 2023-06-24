const numbers = [12, 20, 52, 59];
// for(const number of numbers) {
//     console.log(number);
// }


// 1. for of can not used with objects 
const botte = {color: 'yellow', price: 500, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(botte);
console.log(keys);
for(const key of keys){
    console.log(key);
}