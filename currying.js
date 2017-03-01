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
