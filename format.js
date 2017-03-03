/**
 * 防止用户输入恶意内容，经过 SaferHTML 函数处理，里面的特殊字符都会被转义
 * @param {string} templateData 用户输入字符串
 */
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;

/**
 * 移除字符串中的所有空格
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function removeWs(str) {
  return str.split(" ").join("");
}
