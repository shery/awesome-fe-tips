/**
 * 去除数组的重复成员
 */
[...new Set(array)]

let unique = function (array) {
    let ro = {};
    let ra = [];
    array.forEach(item=>{
        if(!ro[item]){
            ro[item] = item;
            ra.push(item);
        }
    });
    return ra;
}
