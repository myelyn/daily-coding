// let sum = 0
// function curry (a) {
//   sum += a
//   return function(b) {
//     sum += b
//     return function(c) {
//       sum += c
//       return sum
//     }
//   }
// }

let result = 0
function curry() {
  if (arguments.length) {
    let arr = Array.prototype.slice.call(arguments)
    result = arr.reduce((res, cur) => {
      res += cur
      return res
    }, result)
    return curry
  }
  return result
}

console.log(curry(1,2)(3)())