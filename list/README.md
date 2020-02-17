# 1，结构目录
- components 公共组件部分
- node 服务端部分
- browser 前端部分


## 1.1，components

`container.jsx` 就是要前后端都渲染的列表部分。

可以在 `./node/index.htm` 中搜 `${reactString}`，服务端的渲染会将结果替换掉这个。

## 1.2，node

`app.jsx` 是为了通过服务端渲染时，给 `components` 中的 `container.jsx` 传递参数。

## 1.3，browser

前端代码，打包后会注入到 `./node/source/main.js`，在 `./node/index.htm` 最后引入了这个 js。
```
<script src="./static/main.js"></script>
```

所以页面其实渲染了2遍，先是服务端渲染，再前端渲染并将事件加上去。

注意 `main.js` 的引入路径，因为 `node/index.js` 中的静态资源的引入方式。

前端代码打包命令 `.\node_modules\.bin\webpack --config .\list\browser\webpack.config.js`，注意要加 `--config`