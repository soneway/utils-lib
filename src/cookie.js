const { toString } = {}

/**
 * 设置cookie
 * @param {string} key 键
 * @param {string} val 值
 * @param {Date|number} days 过期时间|过期天数
 * @param {string} path cookie的path
 */
function setItem(key, val, days, path = '/') {
  let str = `${key}=${encodeURIComponent(val)}`

  let expire
  // 过期时间
  if (toString.call(days) === '[object Date]') {
    expire = days
  }
  // 过期天数
  else if (typeof days === 'number') {
    expire = new Date()
    expire.setDate(expire.getDate() + days)
  }

  expire && (str += `;path=${path};expires=${expire.toUTCString()}`)
  document.cookie = str
}

/**
 * 获取cookie
 * @param {string} key 键
 * @returns {string} cookie值
 */
function getItem(key) {
  const { cookie } = document
  const index = cookie.indexOf(`${key}=`)

  if (index !== -1) {
    const start = index + key.length + 1
    let end = cookie.indexOf(';', start)

    // 最后一个
    end === -1 && (end = cookie.length)
    return decodeURIComponent(cookie.slice(start, end))
  }
}

/**
 * 清除cookie
 * @param {string} key 键
 */
function removeItem(key) {
  document.cookie = `${key}=_;expires=${new Date().toUTCString()}`
}

export default {
  setItem,
  getItem,
  removeItem,
}
