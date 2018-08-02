/* eslint-disable import/prefer-default-export */
/**
 * 根据path安全获取值
 * @param object 取值的对象
 * @param path 属性path
 * @param defaultValue 默认值
 * @returns {*}
 */
function getValueByPath(object, path, defaultValue) {
  // 对像为null
  if (object === null) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    return;
  }

  const paths = path.split('.');

  // 遍历路径
  const val = paths.reduce((prev, item) => {
    if (prev === undefined || prev === null) {
      return prev;
    }
    return prev[item];
  }, object);

  // 如拿到的值为undefined,返回默认值
  if (val === undefined) {
    return defaultValue;
  }
  return val;
}

export {
  getValueByPath,
};
