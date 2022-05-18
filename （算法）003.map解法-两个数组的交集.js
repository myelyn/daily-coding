// 题目：给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

// 思路：分别对两个数组创建map，map的key为该数组中出现的数字，value为该数字在数组中出现的次数。然后遍历其中一个map，对每一个key，取出它在另一个map中的value，两个value比较，最小值则为在两个数组中共同出现的次数min，将当前key push到result数组中min次。
const intersect = (arr1, arr2) => {
	const creatMap = (arr) => {
		const map = new Map()
		for (var i=0; i<arr.length; i++){
			let count = map.get(arr[i])
			count = count ? count + 1 : 1
			map.set(arr[i], count)
		}
		return map
	}
	const map1 = creatMap(arr1)
	const map2 = creatMap(arr2)
	const result = []
	map1.forEach((v, k) => {
		let countInOther = map2.get(k)
		if (countInOther) {
			let countTotal = Math.min(countInOther, v)
			for (let i=0; i<countTotal; i++) {
				result.push(k)
			}
		}
	})
	return result
};

console.log(intersect([4,9,5],[9,4,9,8,4]))