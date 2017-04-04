/**
 * 判断一个字符串是不是回文
 */

/**
 * step: 1 将字符串拆分成数组
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let str_to_array = function(str){
  return str.split('');
}

/**
 * step: 1* 将字符串拆分成数组
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let str_to_array = function (str) {
  return Array.prototype.map.call(str,function(x) { return x });
}

/**
 * step：2 检查是不是回文
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let checkPalindrom = function(str){
  return str == str_to_array(str).reverse().join('');
}

/**
 * 利用数组的reduceRight()方法 实现
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let rs = (str) =>{
    return Array.prototype.reduceRight.apply(str,[function(pre,current){
        return pre + current;
    },'']);
}

let checkPalindrom = function(str){
  return str == rs(str);
}
