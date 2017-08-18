let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
let key = 'key';
function getUrlParam(sUrl, sKey) {
    let [, params1] = url.split('?');
    let [params2, ] = params1.split('#');
    let arr = params2.split('&');
    if(sKey){
        let sameArr = [];
        console.log(sKey);
        arr.forEach(x => {
            let temp = x.split('=');
            if(temp[0] === sKey){
                sameArr.push(temp[1]);
            }
        })
        if(sameArr.length === 1) return sameArr[0];
        else if(sameArr.length === 0) return '';
        else return sameArr;
    }else{
        if(params1 == undefined || params1 == '') return {};
        else{
            let result = {};
            arr.forEach(x => {
                let temp = x.split('=');
                
            })
        }
    }
    
}
getUrlParam(url,key);
