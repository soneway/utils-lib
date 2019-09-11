// 转json
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
