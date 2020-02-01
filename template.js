// 使用 es6 模板字符串，简单实现的 template

const user = {
  name: '<script />'
}

const vm = require('vm')

const templateMap = {
  templateA: '`<h2>${include("templateB")}</h2>`',
  templateB: '`<p>12312312312</p>`',
}

const context = {
  include: function(name) {
    return templateMap[name]()
  },

  // 原本用于防止 xss 注入攻击，现在暂时没有用。
  _: function(markup) {
    if (!markup) return
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;')
  }
}

// 实现 include 字模板
Object.keys(templateMap).forEach(key => {
  const temp = templateMap[key]
  // vm.runInNewContext 是隔离沙箱。
  // 第2个参数是一个对象，属性就是从外面传递给沙箱里的内容。
  templateMap[key] = vm.runInNewContext(`
    (function() {
      return ${temp}
    })
  `, context)
});
// console.log(templateMap)
console.log(templateMap['templateA']())