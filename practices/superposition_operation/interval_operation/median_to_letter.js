'use strict';

function median_to_letter(collection) {
  let num = collection.length % 2 === 0 ? Math.ceil((collection[collection.length/2-1]+collection[collection.length/2])/2) : collection[parseInt(collection.length/2)];
  let s = '';
  console.log(num,'*****');
  while(num > 0){
    let m = num % 26;
    m = m===0 ? 26 : m;
    s = (m+9).toString(36) + s;
    num =(num - m)/26;

}
return s;
  
}

module.exports = median_to_letter;
