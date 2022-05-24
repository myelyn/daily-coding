// 题目：给你一个大小为 m x n 的二进制矩阵 grid。岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。岛屿的面积是岛上值为 1 的单元格的数目。计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 体会：breadth-first-search，以某个点为中心计算陆地面积的时候，是以自己为根节点，将自己的子节点（上下左右）加入队列，然后while循环会遍历到子节点，再将孙子节点加入队列，一级一级的查找。区别于dfs算法的一条路走到黑。

const maxAreaOfIsland = (grid) => {
	const lenRow = grid.length, lenCol = grid[0].length
	const arrPos = [[0, -1], [0, 1], [-1, 0], [1, 0]]
	let result = 0
	for (let i = 0; i < lenRow; i++) {
		for (let j = 0; j < lenCol; j++) {
			let quene = [[i, j]]
			let count = 0
			while (quene.length) {
				const [x, y] = quene.shift()
				if (x < 0 || y < 0 || x >= lenRow || y >= lenCol || grid[x][y] !== 1) continue
				grid[x][y] = 0
				count++
				arrPos.forEach(([dx, dy]) => {
					const newX = x + dx, newY = y + dy
					quene.push([newX, newY])
				})
			}
			result = Math.max(result, count)
		}
	}
	return result
}
const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

console.log(maxAreaOfIsland(grid))