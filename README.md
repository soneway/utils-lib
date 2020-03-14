# utils-lib
这是一个工具类库
1. 安装依赖
```bash
npm i utils-lib -S
```
2. 使用
```js
import { swapArrayItems } from 'utils-lib/dist/array';
```
- [API文档](https://soneway.github.io/utils-lib/out/global.html)

## array.js
数组工具函数
- swapArrayItems: 互相调换数组项的位置

## clickoutside.js
vue点击事件工具

## cookie.js
cookie工具函数
- setItem: 设置cookie
- getItem: 获取cookie
- removeItem: 清除cookie

## emitter.js
vue事件工具

## json.js
json工具函数
- parseJSON: 转json

## object.js
对象工具函数
- getValueByPath: 根据path安全获取值
- deepCopy: 深复制对象
- isType: 判断类型
