module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    // lint .vue文件
    'html',
  ],
  globals: {
    // Vue: true
  },

  rules: {
    // 对象最后一个属性后的逗号
    'comma-dangle': 1,
    // 模块加载必须换行
    'import/newline-after-import': 0,
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 禁止给参数重新赋值
    'no-param-reassign': 0,
    // 语句强制分号结束
    'semi': [2, 'always'],
    // 箭头函数中花括号样式(只有return语句时,不需要花括号)
    'arrow-body-style': 1,
    // 自增自减
    'no-plusplus': 0,
    // 禁止无用的表达式
    'no-unused-expressions': 0,
    // 大括号风格
    'brace-style': 0,
    // 禁止switch穿透
    'no-fallthrough': 1,
    // 禁止操作符混用
    'no-mixed-operators': 1,
    // function关键字后空格
    'space-before-function-paren': [2, 'never'],
    // 最大长度
    'max-len': 1,
    // 禁用arguments
    'prefer-rest-params': 1,
    // 函数必须有返回值
    'consistent-return': 0,
    // 禁止else语句内只有if语句
    'no-lonely-if': 1,
    // import必须最先
    'import/first': 0,
    // 强制驼峰法命名
    'camelcase': 0,
    // 标识符不能以_开头或结尾
    'no-underscore-dangle': 1,
    // 禁止在使用new构造一个实例后不赋值
    'no-new': 1,
  },
};
