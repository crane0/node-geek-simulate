// 以 detail 详情页为例，下面列举的都是没有下沉的内容，因为每个页面都是不一样的，和业务强相关的。
// 数据请求模块会调用下面的业务代码，转换为真正的程序逻辑，将一些不希望新手了解的细节屏蔽。

module.exports = {
  detail: {
    // header 名字？
    protocol: 'geek-rpc',
    // 每个rpc调用，也就是微服务都是不一样的。
    ip: '127.0.0.1',
    port: 4000,
    // 协议名称
    protobufFile: `${__dirname}/../proto/detail.proto`,
    // 请求和返回结构体的名字
    requestStruct: 'ColumnRequest',
    responseStruct: 'ColumnResponse',
  },
  articles: {
    protocol: 'http',
    url: 'http://127.0.0.1:4003',

    before: function (data) {
      return data
    },

    then: function (res) {
      return JSON.parse(res)
    },

    catch: function () {
      
    }
  }
}