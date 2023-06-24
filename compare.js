const first = {a: 5};
const second = {a: 5};
const third = second;
// if(third === second){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }

// do not use this method to compare object or array
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);
if(firstString === secondString){
    console.log('they are same')
}
else{
    console.log('different')
}