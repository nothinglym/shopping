/**
 * Created by Nan on 2016/1/18.
 */

//在数组中获取指定值的元素索引
Array.prototype.getIndexByValue = function (value) {
  var index = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].themeId == value) {
      index = i;
      break;
    }
  }
  return index;
};
//删除数组指定下标
Array.prototype.remove = function (dx) {
  if (isNaN(dx) || dx > this.length) {
    return false;
  }
  for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] != this[dx]) {
      this[n++] = this[i]
    }
  }
  this.length -= 1
};

Array.prototype.arrayUnique = function () {

  var n = [this[0]]; //结果数组
  for (var i = 1; i < this.length; i++) //从第二项开始遍历
  {
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    //那么表示第i项是重复的，忽略掉。否则存入结果数组
    if (this.indexOf(this[i]) == i) n.push(this[i]);
  }
  return n;
};
