// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。子数组是数组中的一个连续部分。

// 这是力扣第53题，一道经典的动态规划题

// 思路：将原问题转化为n个子问题：以nums[i]结尾的子数组的最大和是多少。用dp[i]表示以nums[i]结尾的子数组的最大和。计算这个问题时，重点是dp[i-1]如果小于0，则可以舍弃掉，从nums[i]开始计算。此时dp为nums[i]。

let nums = [-2,1,-3,4,-1,2,1,-5,4]

let maxSubArray = function(nums) {
  const len = nums.length
  let dp = []
  dp[0] = nums[0]
  let max = nums[0]

  for (var i=1; i<len; i++) {
      dp[i] = Math.max(dp[i-1], 0) + nums[i]
      max = Math.max(dp[i], max)
  }
  return max
}