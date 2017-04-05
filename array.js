/**
 * 去除数组的重复成员 es6 的 Set() 数据对象
 */
 let unique = function(array){
   return [...new Set(array)];
 }
/**
 * 利用 Object 对象的键是唯一的特性
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
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
 * 统计字幕出现次数
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let countChar = function countChar(str){
    let ro = {};
    for(let c of str){
        if(!ro[c]){
            ro[c] = 1;
        }else{
            ro[c] ++;
        }
    }
    return ro;
}
/**
 * 利用数组 reduce 方法统计字母出现次数
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let countChar = function countChar(str){
    return Array.prototype.reduce.call(str,function(pre,current){
        if(pre[current]){
            pre[current] ++;
        }else{
            pre[current ] = 1;
        }
        return pre;
    },{});
}
/**
 * 找出出现最多的字符
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let findMaxDuplicateChar = function (str){
  let chars = countChar(str);
  let max = 0;
  let char = null;
  for(let c in chars){
    if(chars[c] > max){
      max = chars[c];
      char = c;
    }
  }
  return char;
}

/**
 * 合并数组
 */
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

// 将 arrB 融合进 arrA, 改变原数组 arrA
[].push.apply(arrA, arrB);

/**
 * 数组中的最大差值
 */
 let getMaxProfit = function getMaxProfit(arr){
     let max = Math.max.apply(Math,arr);
     let min = Math.min.apply(Math,arr);
     return max - min;
 }
 
