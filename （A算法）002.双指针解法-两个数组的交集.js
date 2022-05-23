// 题目：给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

const intersect = (arr1, arr2) => {
	arr1.sort((a,b) => a-b);
	arr2.sort((a,b) => a-b);
	const num = []
	let p1 = 0;
	let p2 = 0;
	while(p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] === arr2[p2]) {
			num.push(arr1[p1])
			p1++;
			p2++;
			continue;
		}
		arr1[p1] < arr2[p2] ? p1++ : p2++;
	}
	return num;
};

console.log(intersect([4,9,5],[9,4,9,8,4]))