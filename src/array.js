// 互相调换数组项的位置
function swapArrayItems (array, x, y) {
  array.splice(x, 1, ...array.splice(y, 1, array[x]));
}

export {
  swapArrayItems,
};
