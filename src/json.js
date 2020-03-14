/**
 * 转json
 * @param {string} string
 * @returns {object} json对象
 */
function parseJSON (string) {
  if (!string) {
    return {};
  }

  try {
    return JSON.parse(string);
  }
  catch (e) {
    return {};
  }
}

export {
  parseJSON,
};
