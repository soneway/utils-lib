import { replaceTemplate } from 'utils-lib/dist/string';

// 不提交data的请求方法
const noDataMethods = ['get', 'delete', 'head', 'options'];

/**
 * 制造请求action
 * @param method 请求方法: get(默认), post, put等
 * @param type mutation类型
 * @param url 请求url
 * @param resolve 回调函数(可处理数据)
 * @returns function
 */
function makeAction ({ method = 'get', type, url }, resolve) {
  /**
   * @param pathData 用于替换url pathname模块字符的数据
   * @param body 提交的数据
   * @param query url参数
   * @param resolve 回调函数(可处理数据)
   * @returns function
   */
  return ({ commit }, { pathData, body, query, options } = {}) => {
    // 请求方法是否初始化
    const { request } = makeAction.defaults;
    if (!request) {
      return console.error('makeAction.defatuls.request未初始化');
    }

    let data = body;
    const config = {
      params: query,
      data: body,
      ...options,
    };

    // 不提交data的请求方法
    if (noDataMethods.indexOf(method) !== -1) {
      data = config;
    }

    // 请求
    return request[method](replaceTemplate(url, pathData), data, config)
      .then((resData = {}) => {
        // 回调函数(可处理数据)
        resolve && resolve(resData);
        type && commit(type, resData.data);
        return Promise.resolve(resData);
      });
  };
}

// 默认配置
makeAction.defaults = {};

export {
  makeAction,
};
