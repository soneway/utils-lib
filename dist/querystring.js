// 查询字符转为对象
function parse(str) {
  str || (str = window.location.search.slice(1));

  var rs = {};
  // 字符
  if (typeof str === 'string' && str) {
    str.split('&').forEach(function (item) {
      var kv = item.split('=');
      var key = kv[0];
      var val = kv[1];
      val !== undefined && (rs[key] = decodeURIComponent(val));
    });
  }
  return rs;
}

// 对象转为查询字符
function stringify(obj) {
  return Object.keys(obj).map(function (key) {
    return key + '=' + encodeURIComponent(obj[key]);
  }).join('&');
}

// 所有的查询字符对象
var queryData = parse();

// 获取项
function getItem(key) {
  if (!key) {
    return;
  }
  var data = parse();
  return data[key];
}

// 查询字符处理类
var querystring = {
  getItem: getItem,
  parse: parse,
  stringify: stringify
};

export default querystring;
export { queryData };
