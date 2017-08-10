function main(num){
    let result = ``;
    num = num > 99 ? 99 : num;
    if(!num || num == 0){
        result = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    if(num == 1){
        result = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.\n${main(num - 1)}`;
    }
    if(num > 1){
        result = `${num} bottle of beer on the wall, ${num} bottle of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n${main(num - 1)}`;
    }
    return result;
}

module.exports = main;
