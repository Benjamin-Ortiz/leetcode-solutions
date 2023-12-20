/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        // console.log(n1, " i = ", i)

        for (let j = i + 1; j < nums.length; j++) {
            let n2 = nums[j];
            // console.log(n2, " j = ", j) 

            if (n1 + n2 === target) {
            return [i,j];
            }
        }
    }
};