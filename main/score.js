module.exports = class Scores{
    constructor(math, chinese, english, programing){
        this.math = math;
        this.chinese = chinese;
        this.english = english;
        this.programing = programing;
    }
    sum(){
        console.log('***');
        return this.math + this.chinese + this.english + this.programing;
    }
    average(){
        return this.sum() / 4;
    }
}