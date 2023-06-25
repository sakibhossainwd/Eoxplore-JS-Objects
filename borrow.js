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
console.log(output);

const student2 = {
    name: 'Rakib Hossain',
    money: 2000
}

const output2 = student.exam.call(student2);
console.log(output2); 