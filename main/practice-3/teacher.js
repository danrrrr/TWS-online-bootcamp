const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.clazzes = classes;
    }
    introduce(){
        if(this.clazzes.join('') == [].join('')){
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }else{
            let classArr = [];
            this.clazzes.forEach(x => {classArr.push(x.num)});
            return super.introduce() + ` I am a Teacher. I teach Class ${classArr.join(',')}.`;
        }
    }
    isTeaching(student){
        for(let clazz of this.clazzes){
            if(clazz.students.includes(student)) return true;
        }
        return false;
    }
    notifyStudentAppended(){
        let result = [];
        this.clazzes.forEach(x => {
            if(x.students.length >= 1){
                x.students.forEach(ele => {
                    result.push(`I am ${this.name}. I know ${ele.name} has joined Class ${x.num}.`)
                })
            }
        });
        return result.join('\n');
    }
    notifyLeaderAssigned(){
        let result = [];
        this.clazzes.forEach(clazz => {
            if(clazz.students.length >= 1){
                clazz.students.forEach(stu => {
                    if(stu.name === clazz.leader) result.push(`I am ${this.name}. I know ${stu.name} become Leader of Class ${clazz.num}.`)
                })
            }
        });
        return result.join('\n');
    }
    

}