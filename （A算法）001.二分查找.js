// 题目：nums为数组，由升序数字组成。寻找目标数字target在nums中的位置

let search = (nums, target) => {
    
    let low = 0
    let high = nums.length -1
    while(low <= high) {
        if (target === nums[low]) {
            return low
        }
        if (target === nums[high]) {
            return high
        }
        const mid = Math.floor((low + high)/2)
        if (target === nums[mid]) {
            return mid
        }
        if (target > nums[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
				console.log(`low: ${low}, high: ${high}, mid: ${mid}`)
    }
    return -1
}
// 生成 1-10000的数组
const arr = new Array(10000).fill(1).map((n, i) => i)
// 查找target
console.log(search(arr, 0))
console.log(search(arr, 6666))