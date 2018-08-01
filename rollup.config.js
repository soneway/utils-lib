import babel from 'rollup-plugin-babel';
import path from 'path';
import fs from 'fs';

// 获取entry函数
function getEntries(entryDir = path.join(__dirname, './src')) {
  const files = fs.readdirSync(entryDir);
  return files.map((file) => path.join(entryDir, file))
    // 过滤出.js文件
    .filter((filePath) => {
      const stat = fs.statSync(filePath);
      return !stat.isDirectory() && filePath.endsWith('.js');
    })
    // 返回所有js文件entry信息: {name: path}对象
    .reduce((prev, filePath) => {
      const pathInfo = path.parse(filePath);
      prev[pathInfo.name] = filePath;
      return prev;
    }, {});
}

export default {
  input: getEntries(),
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    babel(),
  ],
};
