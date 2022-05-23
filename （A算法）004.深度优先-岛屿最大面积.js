// 题目：给你一个大小为 m x n 的二进制矩阵 grid。岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。岛屿的面积是岛上值为 1 的单元格的数目。计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

const maxAreaOfIsland = function(grid) {
	let res = 0
	const arrPos = [[0, -1], [0, 1], [-1, 0], [1,0]]
	const dfs = (i, j) => {
		let total = 0
		if (i>=0 && j>=0 && i<grid.length && j<grid[0].length && grid[i][j]===1) {
			total ++
			grid[i][j] = 0
			arrPos.forEach(pos => {
				total += dfs(i + pos[0], j + pos[1])
			})
		}
		return total
	}
	for(let i=0; i<grid.length; i++) {
		for (let j=0; j<grid[i].length; j++) {
			res = Math.max(res, dfs(i, j))
		}
	}
	return res
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))