/**
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，
 * 很容易发生“栈溢出”错误（stack overflow）。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 * 部署了尾递归的 阶乘函数 factorial
 */
 function factorial(n, total = 1) {
 	if (n <= 1) return total;
 	return factorial(n - 1, n * total);
 }
