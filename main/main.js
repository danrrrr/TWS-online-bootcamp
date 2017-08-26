const cli = require('cli-interact');
let Student = require('./student');
let Scores = require('./score');

function init(){
    let query = cli.getNumber;
    let initInfo = `
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
    let cmd = query(initInfo);
    return cmd;
}
function getScore(info, score){
    for(let i = 3; i < info.length; i++){
        let [sub, grade] = info[i].split(':');
        if(sub === 'math'){
            score.math = Number(grade);
        }
        if(sub === 'chinese'){
            score.chinese = Number(grade);
        }
        if(sub === 'english'){
            score.english = Number(grade);
        }
        if(sub === 'programing'){
            score.programing = Number(grade);
        }
    }
    return score;
}
function isStudent(str){
    return true;
}
function addStudent(stuList){
    let query = cli.question;
    let str = `请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：`;
    let answer = query(str);
    while(!isStudent(answer)){
        str = `请按正确的格式输入(格式：姓名, 学号, 班级, 学科: 成绩, ...)：`;
        answer = query(str);
    }
    let info = answer.split(',')
    let [name, id, clazz] = info;
    let scores = new Scores(0,0,0,0);
    scores = getScore(info, scores);
    let student = new Student(name, id, clazz, scores);
    console.log('student.scores.sum()',student.scores.sum());
    stuList.push(student);
    console.log(`学生${student.name}的成绩被添加`);
    return stuList;

}
function getClassAverage(stuList){
    let total = 0;
    stuList.forEach(x =>{
        total += x.scores.sum();
    });
    return total / stuList.length;
}
function getClassMidNum(stuList){
    let totalArr = [];
    stuList.forEach(x => {
        totalArr.push(x.scores.sum());
    })
    totalArr.sort((a,b) => a-b);
    return totalArr.length % 2 === 0 ? (totalArr[totalArr.length/2-1] + totalArr[totalArr.length/2])/2 : totalArr[Math.floor(totalArr.length/2)];
}
function printScore(student){
    console.log(student);
    let total = student.scores.sum();
    let average = student.scores.average();
    let printArr = [student.name, student.scores.math, student.scores.chinese, student.scores.english, student.scores.programing, average, total];
    return printArr.join('\t|\t');
}
function printStu(stuList){
    let query = cli.question;
    let str = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
    let answer = query(str);    
    while(false){
        str = `请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
        answer = query(str);
    }
    let ids = answer.split(',');
    let print = `成绩单\n`;
    print += `姓名\t|\t数学\t|\t语文\t|\t英语\t|\t编程\t|\t平均分\t|\t总分 \n`;
    print += `========================\n`;

    for (let id of ids) {
        let student = stuList.find( x => x.id === id);
        if(student){
            print += printScore(student);
            print += "\n";
        }
    }
    let classAverage = getClassAverage(stuList);
    let classMidNum = getClassMidNum(stuList);
    print += `========================
全班总分平均数：${classAverage}
全班总分中位数：${classMidNum}`;
    console.log(print);
}
function main(){
    let stuList = [];
    while(1){
        let cmd = init();
        if(cmd === 1){
            stuList = addStudent(stuList);
        }
        else if(cmd === 2){
            printStu(stuList);
        }
        else if(cmd === 3){
            break;
        }else{
            console.log(`请输入正确标号`);
            main();
        }
    }
}
module.exports = main();
