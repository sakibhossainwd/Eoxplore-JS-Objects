// console.log(this)

const student = {
    name: 'Sakib Hossain',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geomatry'],
    exam: function(){
        console.log(this)
        return `${this.name} is participating in an exam`
    },
    examArrow: () => {
        console.log(this)
    },
    examNested: () => {
        const arrow = () => {
            console.log(this)
        }
        arrow();
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
// console.log(student);
// student.exam()

const student2 = {
    name: 'Rakib Hosaain',
    money: 2000
}

student2.exam = student.exam
student2.exam()

function clickHandler(){
    console.log(this)
}

document.getElementById('clickHandler').addEventListener('click', function(){
    console.log(this)
})