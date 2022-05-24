// 1.call的实现

Function.prototype.call2 = function(obj){
  obj.fn = this
  var ret = obj.fn([...arguments].slice(1))
  delete obj.fn
  return ret
  // 1.call2里面的this就是调用call2方法的函数，将该函数变成对象obj上面的方法，从而使该函数内部的this指向obj
  // 2.要把函数的返回值先保存起来
  // 3.执行完后，将方法从对象上删除
  // 4.返回执行结果
}

// 测试
const foo = {
  value: 123
};
const fnTest = function (...args) {
  // 随便写点测试内容
  return this.value.toString() + [...args].toString().replace(/\,/g, '')
}

console.log(fnTest.call2(foo, 456, 789, 111, 222)) // 123456789111222


// 2. apply 跟call差不多，只是参数是个数组

// 3.bind简单实现

Function.prototype.bind2 = function(obj) {
  const fn = this
  const args = [...arguments].slice(1)
  return function() {
    fn.apply(obj, args)
  }
}

// 测试一下
const testBind = function(x, y) {
  console.log(this.value)
  console.log(x, y)
}

const newFn = testBind.bind2(foo, 1, 2)
newFn()