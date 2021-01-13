import fecha from 'fecha';

/**
 * 合法日期判断
 * @param {Date} date 要判断的日期
 * @returns {boolean} 是否合法
 */
function isValidDate (date) {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * 获取日期字符串
 * @param {Date|string|number} ts 要转换的时间
 * @param {string} format 日期格式
 * @returns {string|*} 日期字符串
 */
function getDateString (ts, format = 'YYYY-MM-DD') {
  if (!ts) return;

  let tsDate;

  // 日期对象
  if (ts instanceof Date) {
    tsDate = ts;
  }

  // 字符(日期字符)
  if (typeof ts === 'string') {
    // 日期字符
    tsDate = new Date(ts.replace(/-/g, '/'));

    if (!isValidDate(tsDate)) {
      // 时间戳字符
      tsDate = new Date(+ts);
    }
  }

  // 时间戳数字
  if (typeof ts === 'number') {
    tsDate = new Date(ts);
  }

  // 日期不合法
  if (!isValidDate(tsDate)) return ts;

  return fecha.format(tsDate, format);
}

/**
 * 获取时间字符串
 * @param {Date|string|number} ts 要转换的时间
 * @param {string} format 日期格式
 * @returns {string|*} 时间字符串
 */
function getDatetimeString (ts, format = 'YYYY-MM-DD HH:mm') {
  return getDateString(ts, format);
}

// 日期相关处理对象
export {
  isValidDate,
  getDateString,
  getDatetimeString,
};
