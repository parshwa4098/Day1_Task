// Question 2: Rotate Array

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

let nums=[1,2,3,4,5,6,7]
let k=3
for(let i=0;i<k;i++){
    let last=nums.pop()
    nums.unshift(last)

}
console.log(nums)
