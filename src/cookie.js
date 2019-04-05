const { toString } = {};

/**
 * 设置cookie函数
 * @param {string} key 键
 * @param {string} val 值
 * @param {Date|number} days 过期时间|过期天数
 * @param {number} hours 过期小时数
 */
function setItem (key, val, days, hours) {
  let str = `${key}=${encodeURIComponent(val)}`;

  let expire;
  // days参数是一个日期
  if (toString.call(days) === '[object Date]') {
    expire = days;
  }
  // 过期天数
  else if (typeof days === 'number') {
    expire = new Date();
    expire.setDate(expire.getDate() + days);
  }
  // 过期小时数
  else if (typeof hours === 'number') {
    expire = new Date();
    expire.setHours(expire.getHours() + hours);
  }

  expire && (str += `;expires=${expire.toUTCString()}`);
  document.cookie = str;
}

// 获取
function getItem (key) {
  const { cookie } = document;
  const index = cookie.indexOf(`${key}=`);

  if (index !== -1) {
    const start = index + key.length + 1;
    let end = cookie.indexOf(';', start);

    // 最后一个
    end === -1 && (end = cookie.length);
    return decodeURIComponent(cookie.slice(start, end));
  }
}

// 清除
function removeItem (key) {
  document.cookie = `${key}=_;expires=${new Date().toUTCString()}`;
}

export default {
  setItem,
  getItem,
  removeItem,
};
