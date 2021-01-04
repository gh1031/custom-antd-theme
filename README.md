# 使用默认主题

```js
const coverTheme from 'custom-antd-theme';
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
