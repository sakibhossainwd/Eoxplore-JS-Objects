const student = {
    name: 'Sakib Hossain',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geomatry'],
    exam: function(){
        return `${this.name} is participating in an exam`
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    giveTreat: function(amount, tips){
        this.money = this.money - (amount + tips);
        return this.money;
    }
}

const output = student.exam();
// console.log(output);

const student2 = {
    name: 'Rakib Hossain',
    money: 2000
}

// call
const output2 = student.exam.call(student2);
// console.log(output2); 
const student2Money = student.giveTreat.call(student2, 500, 100);
console.log(student2Money)

// apply
const student2Money2 = student.giveTreat.apply(student2, [1000, 100]);
console.log(student2Money2);

// bind
const student2Treat = student.giveTreat.bind(student2);
const remainning = student2Treat(150, 50);
console.log(remainning);