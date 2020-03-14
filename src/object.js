/**
 * 根据path安全获取值
 * @param {object} object 取值的对象
 * @param {string} path 属性path
 * @param {*} defaultValue 默认值
 * @returns {*} 获取的值
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
 * @param {object|array} object 被复制的对象
 * @returns {*} 复制的对象
 */
function deepCopy (object) {
  try {
    return JSON.parse(JSON.stringify(object));
  }
  catch (e) {
    return object;
  }
}

/**
 * 判断类型
 * @param {*} value 要判断的对象
 * @param {string} type 类型
 * @returns {boolean}
 */
function isType (value, type) {
  return {}.toString.call(value) === `[object ${type}]`;
}

export {
  getValueByPath,
  deepCopy,
  isType,
};
