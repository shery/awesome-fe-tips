/**
 * Promise 扩展，部署 done 方法保证捕捉到任何可能出现的错误，并向全局抛出
 * @param  {[type]}   onFulfilled [Fulfilled 状态回掉函数]
 * @param  {[type]}   onRejected  [Rejected 状态回掉函数]
 * @return {Function}             [description]
 */
Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => { throw reason }, 0);
    });
};
