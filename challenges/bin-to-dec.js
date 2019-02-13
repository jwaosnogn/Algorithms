/** 
 * @description (status): not-attempted
 * @description junior-HH
 */

 
/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let num = 0;
  const reverse = binary.split('').reverse().join('');
  console.log(reverse);
  for (let i = 0; i < reverse.length; i += 1) {
    if (i === 0 && Number(reverse[i]) === 1) {
      num += 1;
    } else if (Number(reverse[i]) === 1) {
      num += (2 ** i);
    } else if (Number(reverse[i] !== 0)) {
      return 'Not binary';
    }
  }
  return num;
}

module.exports = binToDec;
