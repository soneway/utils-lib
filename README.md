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
- [API文档](https://soneway.github.io/utils-lib/out/)

## array.js
- 数组工具函数
1. swapArrayItems: 互相调换数组项的位置

## clickoutside.js
- vue点击事件工具

## cookie.js
- cookie工具函数
1. setItem: 设置cookie
1. getItem: 获取cookie
1. removeItem: 清除cookie

## emitter.js
- vue事件工具

## json.js
- json工具函数
1. parseJSON: 转json

## object.js
- 对象工具函数
1. getValueByPath: 根据path安全获取值
1. deepCopy: 深复制对象
1. isType: 判断类型
