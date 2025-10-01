// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:

// Input: x = 3, y = 1
// Output: 1
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.
function hammingDistance(x,y) {
  let a =1 
  let count = 0;
  while (a) {
    count=count+1 & 1
    a >>= 1;
  }
  return count;
}

console.log(hammingDistance(3, 1)); 