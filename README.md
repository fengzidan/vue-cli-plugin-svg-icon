# vue-cli-plugin-svg-icon
## 说明
优雅的使用svg的插件版
## 用法
-- 安装
`npm install vue-cli-plugin-svg-icon`
-- 配置
```javascript
// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icon'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}
```
-- 使用
1. 在`src/icon/svg`中新增svg文件，命名为`delete.svg`
2. 在vue文件中使用`delete.svg`
```vue
<template>
  <svg-icon icon="delete" class-name="delete-icon">
</template>
<style>
.delete-icon {
  width: 100px;
  height: 100px;
  fill: red;
}
</style>
```
