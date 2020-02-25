// 数据请求模块

// config 就是 page.data.js
function factory(config) {
  // 优化的准则之一：将很多的计算操作，放到用户感知不到的地方做。
  // 所以在这里做配置相关的操作，用户请求过程中不需要关注这些内容。
  config.before = config.before || (d => d)
  config.then = config.then || (d => d)
  config.catch = config.catch || (d => d)

  requestors[config.protocol].compile(config)

  // 这个函数做请求操作
  return function (data) {
    data = config.before(data)
    return requestors[config.protocol]
      .request(data)
      .then(config.then)
      .catch(config.catch)
  }
}

const requestors = {}

// 因为想设计 factory 支持的协议（protocol）是无限的，就像 webpack的 loader 一样，
// 所以添加一个注册协议的方法。
// 第1个参数是协议，第2个参数是真正执行请求的逻辑请求器。
factory.registerProtocol = function (protocol, requestor) {
  requestors[protocol] = requestor
}

module.exports = factory
