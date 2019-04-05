/**
 * 根据path安全获取值
 * @param object 取值的对象
 * @param path 属性path
 * @param defaultValue 默认值
 * @returns {*}
 */
function getValueByPath (object, path, defaultValue) {
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
    if (prev == null) {
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

/**
 * 深复制对象
 * @param object 被复制的对象
 * @returns {*}
 */
function deepCopy (object) {
  try {
    return JSON.parse(JSON.stringify(object));
  }
  catch (e) {
    return object;
  }
}

export {
  getValueByPath,
  deepCopy,
};
