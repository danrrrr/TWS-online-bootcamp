// Write your code here
module.exports = class Class {
    constructor(num){
        this.num = num;
        this.students = [];
        this.leader;
    }
    appendMember(student){
        this.students.push(student);
    }
    hasStudent(student){
        return this.students.includes(student) ? true : false;
    }
    assignLeader(student){
        if(this.hasStudent(student)){
            this.leader = student.name;
            return `Assign team leader successfully.`;
        }else{
            return `It is not one of us.`;
        }
    }
        
}