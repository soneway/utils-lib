import Vue from 'vue';

// 获取响应的值
function getReactValue (data, key, defaultValue) {
  let value = data[key];
  if (value == null) {
    value = defaultValue;
    Vue.set(data, key, value);
  }
  return value;
}

export {
  getReactValue,
};
