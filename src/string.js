// 替换模板字符串
function replaceTemplate (template, data) {
  if (!data) return template;
  return template.replace(/{(\w+)}/g, (_, key) => {
    const value = data[key];
    return value !== undefined ? value : '';
  });
}

export {
  replaceTemplate,
};
