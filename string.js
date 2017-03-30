/**
 * 将字符串拆分成数组
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
let str_to_array = function(str){
  return str.split('');
}

let str_to_array = function (str) {
  return Array.prototype.map.call(str,function(x){return x});
}
