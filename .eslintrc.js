module.exports = {
  extends: 'standard',
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
  parser: 'babel-eslint',

  rules: {
    // 对象最后一个属性后的逗号
    'comma-dangle': [2, 'always-multiline'],
    // 语句强制分号结束
    'semi': [2, 'always'],
    // 大括号风格
    'brace-style': 0,
    // 强制驼峰法命名
    'camelcase': 0,
    // 禁止在使用new构造一个实例后不赋值
    'no-new': 1,
  },
};
