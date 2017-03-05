/**
 * 解释下这段代码的意思
 * @type {String}
 */
[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
