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

// 查找父级组件
function findParentComponent (context, componentName) {
  if (typeof componentName === 'string') {
    componentName = [componentName];
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

// 响应式设值
function reactSet (target, data) {
  Object.keys(data).forEach((key) => {
    Vue.set(target, key, data[key]);
  });
}

export {
  getReactValue,
  findParentComponent,
  reactSet,
};
