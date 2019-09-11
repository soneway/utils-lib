// 转json
function parseJson (string) {
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
  parseJson,
};
