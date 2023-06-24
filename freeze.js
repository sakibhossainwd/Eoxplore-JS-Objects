const botte = {color: 'yellow', price: 500, isCleaned: true, capacity: 1};
// get all properties/key word in array
const keys = Object.keys(botte);
// console.log(keys);
// get all properties value in array
const values = Object.values(botte);
// console.log(values);
// get sigle properties and value array in array / two dimentional array
const pair = Object.entries(botte);
// console.log(pair);
// seal means fixt the object now we can't delete any properties and can't add new properties but can modifi
Object.seal(botte);
// modifi properties value
botte.price = 200;
// add new properties
botte.height = 100;
// delete properties and value by using Object.delete
// delete botte.isCleaned;

console.log(botte);