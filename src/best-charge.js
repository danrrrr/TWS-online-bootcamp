const loadAllItems = require('./items.js');
const loadPromotions = require('./promotions.js');

function idToList(inputs, allItems){
  let foodList = [];
  inputs.forEach(element => {
    let item = {};
    let [id, count] = element.split(' x ');
    allItems.forEach(ele => {
      if(id === ele.id){
          item['id'] = id;
          item['name'] = ele.name;
          item['price'] = ele.price;
          item['count'] = parseInt(count);
          item['eachTotal'] = ele.price * parseInt(count);
          foodList.push(item);
      }
    });
  });
  return foodList;
}
function getTotalPrice(foodList, promotions, totalPrices){
  promotions.forEach(element => {
    if(element.type ===  '满30减6元'){
      let originalPrice = 0;
      foodList.forEach(ele => {
        originalPrice += ele.eachTotal;
      });
      totalPrices['originalPrice'] = originalPrice;
      totalPrices['Price30_6'] = originalPrice > 30 ? originalPrice - 6 : originalPrice;
    }
    if(element.type === '指定菜品半价'){
      let Prices = 0;
      foodList.forEach(ele => {
        Prices += element.items.includes(ele.id) ? ele.eachTotal / 2 : ele.eachTotal;
      });
      totalPrices['halfPrice'] = Prices;
    }
  });
}
function selectPromotionType(promotions, foodList, totalPrices){
  let pros= {};
	if(totalPrices['Price30_6'] === totalPrices['halfPrice'] && totalPrices['halfPrice'] === totalPrices['originalPrice']){
		pros['type'] = '原价';
	}		
	else pros['type'] = (totalPrices['Price30_6'] <= totalPrices['halfPrice']) ? '满30减6元' : '指定菜品半价';
	if(pros['type'] === '指定菜品半价') {
		pros['discountNames'] = [];
		foodList.forEach(element => {
			if(promotions[1]['items'].includes(element.id)) pros['discountNames'].push(element.name);
		})
	}
	return pros;
}
function getDiscount(pros, totalPrices){
  let discount = 0;
  if(pros.type === '原价') discount = 0;
  if(pros.type === '满30减6元') discount = 6;
  if(pros.type === '指定菜品半价') discount = totalPrices['originalPrice'] - totalPrices['halfPrice'];
  return discount;
}
function print(foodList, pros, totalPrices, discount){
  let str = `============= 订餐明细 =============\n`;
  foodList.forEach(element => {
    str += `${element.name} x ${element.count} = ${element.eachTotal}元\n`;
  });
  str += `-----------------------------------\n`;
  if(pros.type === '原价'){
    str += `总计：${totalPrices.originalPrice}元\n`;
  }
  if(pros.type === '满30减6元'){
    str += `使用优惠:\n满30减6元，省6元\n-----------------------------------\n总计：${totalPrices.Price30_6}元\n`;
  }
  if(pros.type === '指定菜品半价'){
    let nameStr = pros.discountNames.join().split(',').join('，');
    str += `使用优惠:\n指定菜品半价(${nameStr})，省${discount}元\n-----------------------------------\n总计：${totalPrices.halfPrice}元\n`;
  }
  str += `===================================`;
  return str;
}
function bestCharge(selectedItems) {
  const allItems = loadAllItems();
  const promotions = loadPromotions();
  let foodList = idToList(selectedItems, allItems);
  let totalPrices = {};
  getTotalPrice(foodList, promotions, totalPrices);
  let pros = selectPromotionType(promotions, foodList, totalPrices);
  let discount = getDiscount(pros, totalPrices);
  return print(foodList, pros, totalPrices, discount);

}

module.exports = bestCharge;
