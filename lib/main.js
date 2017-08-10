function inputToArr(inputStr){
    if(inputStr.includes('-')) return inputStr.split('-').join('').split('').map(x => parseInt(x));
    else return inputStr.split('').map(x => parseInt(x));
}

function getCheckNum(arr){
    let total = arr.reduce((sum, value) => sum + value, 0);
    return 10 - total % 10;
}

function numberToCode(inputStr, numArr){
    let inputArr = inputToArr(inputStr);
    console.log(inputArr);
    let checkNum = getCheckNum(inputArr);
    console.log(checkNum);
    let result = numArr['s'];
    inputArr.forEach(ele => result += numArr[ele]);
    result += numArr[checkNum];
    result += numArr['s'];
    console.log(result);
    return result;
}

function inputToArrcode(inputStr, codeArr){
    let arrCode = [];
    if(inputStr.length == 32 || inputStr.length == 52){
        if(inputStr[0] === codeArr['s'] && inputStr[inputStr.length-1] === codeArr['s']){
            let tempStr = inputStr.slice(1, -1);
            for(let i = 0; i < tempStr.length; i += 5){
                arrCode.push(tempStr.slice(i, i + 5));
            }
            return arrCode;
        }else return false;
    }else return false;
}
function arrCodeToArrnum(arrCode, codeArr){
    let arrNum = [];
    arrCode.forEach(ele => arrNum.push(codeArr[ele]));
    return arrNum;
}
function codeToNumber(inputStr, codeArr){
    let arrCode = inputToArrcode(inputStr, codeArr);
    let arrNum = arrCodeToArrnum(arrCode, codeArr);
    arrNum.splice(arrNum.length-1, 1);
    if(arrNum.length === 9){
        arrNum.splice(5, 0, '-');
    }
    console.log(arrNum);
    return arrNum.join('');
}

function main(inputStr){
    const numArr = {'1': ':::||', 
				 '2': '::|:|',
				 '3': '::||:',
				 '4': ':|::|',
				 '5': ':|:|:',
				 '6': ':||::',
				 '7': '|:::|',
				 '8': '|::|:',
				 '9': '|:|::',
				 '0': '||:::',
                 's': '|'};
    const codeArr = {':::||': '1', 
				 '::|:|': '2',
				 '::||:': '3',
				 ':|::|': '4',
				 ':|:|:': '5',
				 ':||::': '6',
				 '|:::|': '7',
				 '|::|:': '8',
				 '|:|::': '9',
				 '||:::': '0',
				 's': '|'}
    if(inputStr.includes('|')){
        result = codeToNumber(inputStr, codeArr);
    }else{
        result = numberToCode(inputStr, numArr);
    }
    return result;
}

module.exports = main;
