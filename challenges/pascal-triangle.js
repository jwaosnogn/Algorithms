/** 
 * @description (status): attempted
 * @description senior-HH
 */


/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

/*
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5, 1]

  curr[0] = prev[0]
  curr[1] = prev[0] + prev[1]
  curr[2] = prev[1] + prev[2]
  curr[3] = prev[2] + prev[3]
  curr[4] = prev[3] + prev[4]
  curr[5] = prev[4] 
*/

/* my idea:
  construct either just the 1st or both 1st and 2nd rows
  then loop through using the previous row as a base to construct the next line
  stop when it reaches the nth level deep
*/

function pascalTriangle(numRows) {

}

module.exports = pascalTriangle;
