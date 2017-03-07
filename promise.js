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
/**
 * Promise 扩展，部署 finally 方法用于指定不管Promise对象最后状态如何，都会执行的操作
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
