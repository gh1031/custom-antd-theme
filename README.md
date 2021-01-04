# 使用默认主题

```js
const coverTheme = require('custom-antd-theme').default;
const vars = coverTheme({
  // 自定义自己的主题
  // '@primary-color': '',
});
{
  loader: 'less-loader',
  options: {
    lessOptions: {
      modifyVars: vars
    }
  }
}
```
