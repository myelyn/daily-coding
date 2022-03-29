
const maxAreaOfIsland = function(grid) {
	let res = 0
	const arrPos = [[0, -1], [0, 1], [-1, 0], [1,0]]
	const dfs = (i, j) => {
		let total = 0
		const calArea = (i, j) => {
			if (i>=0 && j>=0 && i<grid.length && j<grid[0].length && grid[i][j]===1) {
				total ++
				grid[i][j] = 0
				arrPos.forEach(pos => {
					calArea(i + pos[0], j + pos[1])
				})
			}
		}
		calArea(i,j)
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