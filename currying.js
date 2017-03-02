/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6
 * add(1, 2, 3)(4) = 10
 * add(1)(2)(3)(4)(5) = 15
 */
function add() {
	const args = [...arguments];
	const addInner = function() {
		const _addInner = function() {
			args.push(...arguments);
			return _addInner;
		};
		_addInner.toString = () => {
			return args.reduce((total,num) => total + num, 0);
		}
		return _addInner;
	};
	return addInner();
}
/**
 * 柯里化函数 这里要实现的功能 将尾递归函数 tailFactorial 变为只接受1个参数的 factorial
 * @param  {Function} fn 待处理函数，这里对应 tailFactorial 函数
 * @param  {[type]}   n  其中一个参数默认值，这里 total 默认值定为 1
 * @return {[type]}      [description]
 */
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);
