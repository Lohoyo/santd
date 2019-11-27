(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{545:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\\"定制主题\\"><span>定制主题</span><a href=\\"#定制主题\\" class=\\"anchor\\">#</a></h1><p>Santd 的组件结构及样式和 Antd React 完全一致，你可以参考 Antd React 的定制方式进行配置。</p><p>Ant Design 设计规范和技术上支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于全局样式（主色、圆角、边框）和指定组件的视觉定制。</p><p><img src=\\"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png\\" alt=\\"theme\\"></p><h2 id=\\"ant-design-san-的样式变量\\"><span>Ant Design San 的样式变量</span><a href=\\"#ant-design-san-的样式变量\\" class=\\"anchor\\">#</a></h2><p>antd 的样式使用了 <a href=\\"http://lesscss.org/\\">Less</a> 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。</p><p>以下是一些最常用的通用变量，所有样式变量可以在 <a href=\\"https://github.com/ecomfe/santd/blob/master/src/core/styles/themes/default.less\\">这里</a> 找到。</p><pre><code class=\\"language-javascript\\">@primary-color: #1890ff; // 全局主色\\n@link-color: #1890ff; // 链接色\\n@success-color: #52c41a; // 成功色\\n@warning-color: #faad14; // 警告色\\n@error-color: #f5222d; // 错误色\\n@font-size-base: 14px; // 主字号\\n@heading-color: rgba(0, 0, 0, 0.85); // 标题色\\n@text-color: rgba(0, 0, 0, 0.65); // 主文本色\\n@text-color-secondary : rgba(0, 0, 0, .45); // 次文本色\\n@disabled-color : rgba(0, 0, 0, .25); // 失效色\\n@border-radius-base: 4px; // 组件/浮层圆角\\n@border-color-base: #d9d9d9; // 边框色\\n@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影</code></pre>\\n<p>如果以上变量不能满足你的定制需求，可以给我们提 issue。</p><h2 id=\\"定制方式\\"><span>定制方式</span><a href=\\"#定制方式\\" class=\\"anchor\\">#</a></h2><p>原理上是使用 less 提供的 <a href=\\"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables\\">modifyVars</a> 的方式进行覆盖变量。下面将针对不同的场景提供一些常用的定制方式。</p><h3 id=\\"在-webpack-中定制主题\\"><span>在 webpack 中定制主题</span><a href=\\"#在-webpack-中定制主题\\" class=\\"anchor\\">#</a></h3><p>我们以 webpack@4 为例进行说明，以下是一个 webpack.config.js 的典型例子，对 <a href=\\"https://github.com/webpack-contrib/less-loader\\">less-loader</a> 的 options 属性进行相应配置。</p><pre><code class=\\"language-javascript\\">// webpack.config.js\\nmodule.exports = {\\n    rules: [{\\n        test: /\\\\.less$/,\\n        use: [{\\n            loader: &#39;style-loader&#39;,\\n        }, {\\n            loader: &#39;css-loader&#39;, // translates CSS into CommonJS\\n        }, {\\n            loader: &#39;less-loader&#39;, // compiles Less to CSS\\n            options: {\\n                modifyVars: {\\n                    &#39;primary-color&#39;: &#39;#1DA57A&#39;,\\n                    &#39;link-color&#39;: &#39;#1DA57A&#39;,\\n                    &#39;border-radius-base&#39;: &#39;2px&#39;,\\n                    // or\\n                    &#39;hack&#39;: `true; @import &quot;your-less-file-path.less&quot;;`, // Override with less file\\n                },\\n                javascriptEnabled: true,\\n            },\\n        }],\\n        // ...other rules\\n    }],\\n    // ...other config\\n}</code></pre>\\n<p>注意 less-loader 的处理范围不要过滤掉 node_modules 下的 santd 包</p><h3 id=\\"配置-less-变量文件\\"><span>配置 less 变量文件</span><a href=\\"#配置-less-变量文件\\" class=\\"anchor\\">#</a></h3><p>另外一种方式是建立一个单独的 less 变量文件，引入这个文件覆盖 santd.less 里的变量。</p><pre><code class=\\"language-javascript\\">@import &#39;~santd/dist/santd.less&#39;; // 引入官方提供的 less 样式入口文件\\n@import &#39;your-theme-file.less&#39;; // 用于覆盖上面定义的变量</code></pre>\\n<p>注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 babel-plugin-import 的 style 属性一起使用。</p>");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZG9jcy90aGVtZS5tZD8zYTk2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPGgxIGlkPVxcXCLlrprliLbkuLvpophcXFwiPjxzcGFuPuWumuWItuS4u+mimDwvc3Bhbj48YSBocmVmPVxcXCIj5a6a5Yi25Li76aKYXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIj4jPC9hPjwvaDE+PHA+U2FudGQg55qE57uE5Lu257uT5p6E5Y+K5qC35byP5ZKMIEFudGQgUmVhY3Qg5a6M5YWo5LiA6Ie077yM5L2g5Y+v5Lul5Y+C6ICDIEFudGQgUmVhY3Qg55qE5a6a5Yi25pa55byP6L+b6KGM6YWN572u44CCPC9wPjxwPkFudCBEZXNpZ24g6K6+6K6h6KeE6IyD5ZKM5oqA5pyv5LiK5pSv5oyB54G15rS755qE5qC35byP5a6a5Yi277yM5Lul5ruh6Laz5Lia5Yqh5ZKM5ZOB54mM5LiK5aSa5qC35YyW55qE6KeG6KeJ6ZyA5rGC77yM5YyF5ous5L2G5LiN6ZmQ5LqO5YWo5bGA5qC35byP77yI5Li76Imy44CB5ZyG6KeS44CB6L655qGG77yJ5ZKM5oyH5a6a57uE5Lu255qE6KeG6KeJ5a6a5Yi244CCPC9wPjxwPjxpbWcgc3JjPVxcXCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvelRGb3N6QnRET0RoWGZMQWF6ZlNwWWJTTFNFZXl0b0cucG5nXFxcIiBhbHQ9XFxcInRoZW1lXFxcIj48L3A+PGgyIGlkPVxcXCJhbnQtZGVzaWduLXNhbi3nmoTmoLflvI/lj5jph49cXFwiPjxzcGFuPkFudCBEZXNpZ24gU2FuIOeahOagt+W8j+WPmOmHjzwvc3Bhbj48YSBocmVmPVxcXCIjYW50LWRlc2lnbi1zYW4t55qE5qC35byP5Y+Y6YePXFxcIiBjbGFzcz1cXFwiYW5jaG9yXFxcIj4jPC9hPjwvaDI+PHA+YW50ZCDnmoTmoLflvI/kvb/nlKjkuoYgPGEgaHJlZj1cXFwiaHR0cDovL2xlc3Njc3Mub3JnL1xcXCI+TGVzczwvYT4g5L2c5Li65byA5Y+R6K+t6KiA77yM5bm25a6a5LmJ5LqG5LiA57O75YiX5YWo5bGAL+e7hOS7tueahOagt+W8j+WPmOmHj++8jOS9oOWPr+S7peagueaNrumcgOaxgui/m+ihjOebuOW6lOiwg+aVtOOAgjwvcD48cD7ku6XkuIvmmK/kuIDkupvmnIDluLjnlKjnmoTpgJrnlKjlj5jph4/vvIzmiYDmnInmoLflvI/lj5jph4/lj6/ku6XlnKggPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2Vjb21mZS9zYW50ZC9ibG9iL21hc3Rlci9zcmMvY29yZS9zdHlsZXMvdGhlbWVzL2RlZmF1bHQubGVzc1xcXCI+6L+Z6YeMPC9hPiDmib7liLDjgII8L3A+PHByZT48Y29kZSBjbGFzcz1cXFwibGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+QHByaW1hcnktY29sb3I6ICMxODkwZmY7IC8vIOWFqOWxgOS4u+iJslxcbkBsaW5rLWNvbG9yOiAjMTg5MGZmOyAvLyDpk77mjqXoibJcXG5Ac3VjY2Vzcy1jb2xvcjogIzUyYzQxYTsgLy8g5oiQ5Yqf6ImyXFxuQHdhcm5pbmctY29sb3I6ICNmYWFkMTQ7IC8vIOitpuWRiuiJslxcbkBlcnJvci1jb2xvcjogI2Y1MjIyZDsgLy8g6ZSZ6K+v6ImyXFxuQGZvbnQtc2l6ZS1iYXNlOiAxNHB4OyAvLyDkuLvlrZflj7dcXG5AaGVhZGluZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTsgLy8g5qCH6aKY6ImyXFxuQHRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7IC8vIOS4u+aWh+acrOiJslxcbkB0ZXh0LWNvbG9yLXNlY29uZGFyeSA6IHJnYmEoMCwgMCwgMCwgLjQ1KTsgLy8g5qyh5paH5pys6ImyXFxuQGRpc2FibGVkLWNvbG9yIDogcmdiYSgwLCAwLCAwLCAuMjUpOyAvLyDlpLHmlYjoibJcXG5AYm9yZGVyLXJhZGl1cy1iYXNlOiA0cHg7IC8vIOe7hOS7ti/mta7lsYLlnIbop5JcXG5AYm9yZGVyLWNvbG9yLWJhc2U6ICNkOWQ5ZDk7IC8vIOi+ueahhuiJslxcbkBib3gtc2hhZG93LWJhc2U6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyAvLyDmta7lsYLpmLTlvbE8L2NvZGU+PC9wcmU+XFxuPHA+5aaC5p6c5Lul5LiK5Y+Y6YeP5LiN6IO95ruh6Laz5L2g55qE5a6a5Yi26ZyA5rGC77yM5Y+v5Lul57uZ5oiR5Lus5o+QIGlzc3Vl44CCPC9wPjxoMiBpZD1cXFwi5a6a5Yi25pa55byPXFxcIj48c3Bhbj7lrprliLbmlrnlvI88L3NwYW4+PGEgaHJlZj1cXFwiI+WumuWItuaWueW8j1xcXCIgY2xhc3M9XFxcImFuY2hvclxcXCI+IzwvYT48L2gyPjxwPuWOn+eQhuS4iuaYr+S9v+eUqCBsZXNzIOaPkOS+m+eahCA8YSBocmVmPVxcXCJodHRwOi8vbGVzc2Nzcy5vcmcvdXNhZ2UvI3VzaW5nLWxlc3MtaW4tdGhlLWJyb3dzZXItbW9kaWZ5LXZhcmlhYmxlc1xcXCI+bW9kaWZ5VmFyczwvYT4g55qE5pa55byP6L+b6KGM6KaG55uW5Y+Y6YeP44CC5LiL6Z2i5bCG6ZKI5a+55LiN5ZCM55qE5Zy65pmv5o+Q5L6b5LiA5Lqb5bi455So55qE5a6a5Yi25pa55byP44CCPC9wPjxoMyBpZD1cXFwi5ZyoLXdlYnBhY2st5Lit5a6a5Yi25Li76aKYXFxcIj48c3Bhbj7lnKggd2VicGFjayDkuK3lrprliLbkuLvpopg8L3NwYW4+PGEgaHJlZj1cXFwiI+WcqC13ZWJwYWNrLeS4reWumuWItuS4u+mimFxcXCIgY2xhc3M9XFxcImFuY2hvclxcXCI+IzwvYT48L2gzPjxwPuaIkeS7rOS7pSB3ZWJwYWNrQDQg5Li65L6L6L+b6KGM6K+05piO77yM5Lul5LiL5piv5LiA5LiqIHdlYnBhY2suY29uZmlnLmpzIOeahOWFuOWei+S+i+WtkO+8jOWvuSA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL2xlc3MtbG9hZGVyXFxcIj5sZXNzLWxvYWRlcjwvYT4g55qEIG9wdGlvbnMg5bGe5oCn6L+b6KGM55u45bqU6YWN572u44CCPC9wPjxwcmU+PGNvZGUgY2xhc3M9XFxcImxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPi8vIHdlYnBhY2suY29uZmlnLmpzXFxubW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIHJ1bGVzOiBbe1xcbiAgICAgICAgdGVzdDogL1xcXFwubGVzcyQvLFxcbiAgICAgICAgdXNlOiBbe1xcbiAgICAgICAgICAgIGxvYWRlcjogJiMzOTtzdHlsZS1sb2FkZXImIzM5OyxcXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgICBsb2FkZXI6ICYjMzk7Y3NzLWxvYWRlciYjMzk7LCAvLyB0cmFuc2xhdGVzIENTUyBpbnRvIENvbW1vbkpTXFxuICAgICAgICB9LCB7XFxuICAgICAgICAgICAgbG9hZGVyOiAmIzM5O2xlc3MtbG9hZGVyJiMzOTssIC8vIGNvbXBpbGVzIExlc3MgdG8gQ1NTXFxuICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBtb2RpZnlWYXJzOiB7XFxuICAgICAgICAgICAgICAgICAgICAmIzM5O3ByaW1hcnktY29sb3ImIzM5OzogJiMzOTsjMURBNTdBJiMzOTssXFxuICAgICAgICAgICAgICAgICAgICAmIzM5O2xpbmstY29sb3ImIzM5OzogJiMzOTsjMURBNTdBJiMzOTssXFxuICAgICAgICAgICAgICAgICAgICAmIzM5O2JvcmRlci1yYWRpdXMtYmFzZSYjMzk7OiAmIzM5OzJweCYjMzk7LFxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JcXG4gICAgICAgICAgICAgICAgICAgICYjMzk7aGFjayYjMzk7OiBgdHJ1ZTsgQGltcG9ydCAmcXVvdDt5b3VyLWxlc3MtZmlsZS1wYXRoLmxlc3MmcXVvdDs7YCwgLy8gT3ZlcnJpZGUgd2l0aCBsZXNzIGZpbGVcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH1dLFxcbiAgICAgICAgLy8gLi4ub3RoZXIgcnVsZXNcXG4gICAgfV0sXFxuICAgIC8vIC4uLm90aGVyIGNvbmZpZ1xcbn08L2NvZGU+PC9wcmU+XFxuPHA+5rOo5oSPIGxlc3MtbG9hZGVyIOeahOWkhOeQhuiMg+WbtOS4jeimgei/h+a7pOaOiSBub2RlX21vZHVsZXMg5LiL55qEIHNhbnRkIOWMhTwvcD48aDMgaWQ9XFxcIumFjee9ri1sZXNzLeWPmOmHj+aWh+S7tlxcXCI+PHNwYW4+6YWN572uIGxlc3Mg5Y+Y6YeP5paH5Lu2PC9zcGFuPjxhIGhyZWY9XFxcIiPphY3nva4tbGVzcy3lj5jph4/mlofku7ZcXFwiIGNsYXNzPVxcXCJhbmNob3JcXFwiPiM8L2E+PC9oMz48cD7lj6blpJbkuIDnp43mlrnlvI/mmK/lu7rnq4vkuIDkuKrljZXni6znmoQgbGVzcyDlj5jph4/mlofku7bvvIzlvJXlhaXov5nkuKrmlofku7bopobnm5Ygc2FudGQubGVzcyDph4znmoTlj5jph4/jgII8L3A+PHByZT48Y29kZSBjbGFzcz1cXFwibGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+QGltcG9ydCAmIzM5O35zYW50ZC9kaXN0L3NhbnRkLmxlc3MmIzM5OzsgLy8g5byV5YWl5a6Y5pa55o+Q5L6b55qEIGxlc3Mg5qC35byP5YWl5Y+j5paH5Lu2XFxuQGltcG9ydCAmIzM5O3lvdXItdGhlbWUtZmlsZS5sZXNzJiMzOTs7IC8vIOeUqOS6juimhuebluS4iumdouWumuS5ieeahOWPmOmHjzwvY29kZT48L3ByZT5cXG48cD7ms6jmhI/vvIzov5nnp43mlrnlvI/lt7Lnu4/ovb3lhaXkuobmiYDmnInnu4Tku7bnmoTmoLflvI/vvIzkuI3pnIDopoHkuZ/ml6Dms5XlkozmjInpnIDliqDovb3mj5Lku7YgYmFiZWwtcGx1Z2luLWltcG9ydCDnmoQgc3R5bGUg5bGe5oCn5LiA6LW35L2/55So44CCPC9wPlwiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///545\n')}}]);