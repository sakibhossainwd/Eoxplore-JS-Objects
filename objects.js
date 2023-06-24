// 1. Create object using object literals
const player = {};
// properties
player.name = 'Sakib Hossain';
player.specialty = 'batsman';
// Method
player.bat = function(){ 
    // console.log('swing your bat');
}
player.bat();
// console.log(player);

const student = {
    name: 'Rakib',
    class: 'five',
    roll: function(){
        // console.log('05')
    },
    grade: 'A+'
}

// 2. object constructor
const person = new Object();
// The top line we can call without (new)
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const rekib = Object.create(student);
// console.log(rekib.name);

// 4. class 
class person1{
    name = 'Samia Akter'
    address = 'Bisnupur'
    constructor(age){
        this.age = age;
    }
}

const personResult = new person1(56);
// console.log(personResult);

// Function
function car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new car('z-5', 50000);
console.log(tesla);