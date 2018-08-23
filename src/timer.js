/**
 * 节流(被调用n次,只在time间隔时间点运行)
 * @param fn 回调函数
 * @param time 延时
 */
function throttle(fn, time = 300) {
  if (fn.pending) {
    return;
  }

  fn();
  fn.pending = true;

  setTimeout(() => {
    fn.pending = false;
  }, time);
}

/**
 * 防抖(被调用n次,只运行一次)
 * @param fn 回调函数
 * @param time 延时
 */
function debounce(fn, time = 300) {
  clearTimeout(fn.tid);
  fn.tid = setTimeout(fn, time);
}

export {
  throttle,
  debounce,
};
