let database = require('./datbase.js');
let loadAllItems = database.loadAllItems;
let loadPromotions = database.loadPromotions;

//将输入的字符串转化为由条形码和数量的对象
function goodsCount(inputs) {
    let goodsArr = {};
    inputs.forEach(element => {
        if(element.includes('-')){
            let [barcode, count] = element.split('-');
            goodsArr[barcode] = parseInt(count);
        }else{
            if(goodsArr[element]) goodsArr[element]++;
            else goodsArr[element] = 1;
        }
    });
    return goodsArr;
}
//将条形码转化成清单格式
function barcodeToList(goodsArr, allItem){
    let goodsList = [];
    Object.keys(goodsArr).forEach(element => {
        let item = {};
        allItem.forEach(ele => {
            if(ele.barcode === element){
                item['barcode'] = ele.barcode;
                item['name'] = ele.name;
                item['unit'] = ele.unit;
                item['price'] = ele.price;
                item['count'] = goodsArr[element];
                goodsList.push(item);
            }
        });
    });
    return goodsList;
}
//促销活动
function promotion(goodsList, promotions){
    goodsList.forEach(element => {
        promotions.forEach(ele => {
            if(ele.barcodes.includes(element.barcode)){
                element['promotionType'] = ele.type;
            }
        });
    });
    return goodsList;
}
//计算赠送数量
function getFreeCount(goodsList){
    goodsList.forEach(element => {
        if(element.promotionType){
            if(element.promotionType === 'BUY_TWO_GET_ONE_FREE'){
                element['freeCount'] = Math.floor(element.count / 3);
            }
        }
    });
}
//计算每种商品价格
function getEachTotal(goodsList){
    goodsList.forEach(element => {
        if(element.freeCount){
            console.log(element.freeCount);
            element['itemTotal'] = parseFloat((element.count - element.freeCount) * element.price);
        }else{
            element['itemTotal'] = parseFloat(element.count * element.price);
        }
       
    });
}
//计算总的节省金额
function getAllFree(goodsList){
    let freeTotal = 0;
    goodsList.forEach(element => {
        if(element.freeCount){
            freeTotal += element.freeCount * element.price;
        }
    });
    return freeTotal;
}
//计算总金额
function getTotalPrice(goodsList){
    let totalPrice = 0;
    goodsList.forEach(element => {
        totalPrice += element.itemTotal;
    });
    return totalPrice;
}

//打印清单
function printList(goodsList){
    let printStr = `***<没钱赚商店>购物清单***\n`;
    let proStr = `----------------------\n挥泪赠送商品：\n`;
    let priceStr = `----------------------\n总计：${getTotalPrice(goodsList).toFixed(2)}(元)
节省：${getAllFree(goodsList).toFixed(2)}(元)
**********************`
    goodsList.forEach(element => {
        printStr += `名称：${element.name}，数量：${element.count}${element.unit}，单价：${element.price.toFixed(2)}(元)，小计：${element.itemTotal.toFixed(2)}(元)\n`;
        if(element.freeCount){
            proStr += `名称：${element.name}，数量：${element.freeCount}${element.unit}\n`;
        }
    });
    printStr += proStr + priceStr;
    return printStr;

}
module.exports = function main(inputs) {
    const allItem = loadAllItems();
    const promotions = loadPromotions();
    let goodsArr = goodsCount(inputs);
    let goodsList = barcodeToList(goodsArr,allItem);
    promotion(goodsList, promotions);
    getFreeCount(goodsList);
    getEachTotal(goodsList);
    console.log(printList(goodsList));
};