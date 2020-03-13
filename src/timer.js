/**
 * 防抖(被调用n次,只运行一次)
 * @param fn 回调函数
 * @param timeout 延时
 */
function debounce (fn, timeout = 300) {
  return function (...args) {
    clearTimeout(fn._tid);
    fn._tid = setTimeout(() => {
      fn.call(this, ...args);
    }, timeout);
  };
}

/**
 * 节流(被调用n次,只在time间隔时间点运行)
 * @param fn 回调函数
 * @param timeout 延时
 */
function throttle (fn, timeout = 300) {
  let start = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - start >= timeout) {
      fn.call(this, ...args);
      start = now;
    }
  };
}

export {
  debounce,
  throttle,
};
