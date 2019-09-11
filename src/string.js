// 替换模板字符串
function replaceTemplate (template, context) {
  if (!context) return template;
  return template.replace(/{(.*?)}/g, (match, key) => (context[key.trim()]) || '');
}

export {
  replaceTemplate,
};
