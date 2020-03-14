/**
 * 互相调换数组项的位置
 * @param {array} array 被操作的数组
 * @param {number} x 调换索引
 * @param {number} y 调换索引
 */
function swapArrayItems (array, x, y) {
  array.splice(x, 1, ...array.splice(y, 1, array[x]));
}

export {
  swapArrayItems,
};
