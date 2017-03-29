/**
 * 去除数组的重复成员
 */
 let unique = function(array){
   return [...new Set(array)];
 }

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

/**
 * 合并数组
 */
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

// 将 arrB 融合进 arrA, 改变原数组 arrA
[].push.apply(arrA, arrB);
