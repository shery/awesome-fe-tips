/**
 * 利用闭包，修改下面的代码，让循环输出的结果依次为1， 2， 3， 4， 5
 * for (var i=1; i<=5; i++) {
 *   setTimeout( function timer() {
 *     console.log(i);
 *   }, i*1000 );
 * }
 */
for(var i=1; i<=5; i++){
  (function(i) {setTimeout(function timer(){
    console.log(i);
  }, i*1000)})(i);
}
/**
 * ES6
 */
for(let i=1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i);
  },i*1000);
}
