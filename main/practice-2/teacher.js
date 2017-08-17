const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, id, clazzes){
        super(name, age, id);
        this.clazzes = clazzes;
    }
    introduce(){
        if(this.clazzes.join('') == [].join('')){
            return super.introduce() + ` I am a Teacher. I teach No Class.`
        }else{
            let classArr = [];
            for(let x of this.clazzes) classArr.push(x.num);
            return super.introduce() + ` I am a Teacher. I teach Class ${classArr.join(',')}.`
        }
    }
}