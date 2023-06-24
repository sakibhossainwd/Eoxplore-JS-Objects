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
    }
}

const output = student.exam();
console.log(output);
const reExam = student.improveExam('math')
console.log(reExam);
// console.log(student);