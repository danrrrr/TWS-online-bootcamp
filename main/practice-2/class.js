
module.exports = class Class {
    constructor(num) {
     this.num=num;      
     this.leader;
    }
    assignLeader(student){
        this.leader=student.name;
    }
}