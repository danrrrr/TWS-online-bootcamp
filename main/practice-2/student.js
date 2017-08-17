const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, id, clazz){
        super(name, age, id);
        this.clazz = clazz;
    }
    introduce(){
        return this.name === this.clazz.leader ? super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.num}.` :
            super.introduce() + ` I am a Student. I am at Class ${this.clazz.num}.`;
    }
}