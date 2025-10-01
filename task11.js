

 // Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]
function maximalRectangle(matrix) {
  if (!matrix.length) return 0;

  let maxArea = 0;
  let heights = new Array(matrix[0].length).fill(0);

  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
    }

    let stack = [];
    for (let i = 0; i <= heights.length; i++) {
      let height = i === heights.length ? 0 : heights[i];
      while (stack.length && heights[stack[stack.length - 1]] > height) {
        let h = heights[stack.pop()];
        let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
        maxArea = Math.max(maxArea, h * w);
      }
      stack.push(i);
    }
  }

  return maxArea;
}

