const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.clazz = clazz;
    }
    hasStudent(clazz){
        return clazz.hasStudent(this);
    }
    introduce(){
        if(this.name == this.clazz.leader){
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.num}.`;
        }else{
            return this.clazz.hasStudent(this) ? 
            super.introduce() + ` I am a Student. I am at Class ${this.clazz.num}.` :
            super.introduce() + ` I am a Student. I haven't been allowed to join Class.`;
        }
    }
}