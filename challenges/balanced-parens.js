/**
 * @description (status): completed-1-optimized
 * @description junior-HH
 */


/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */


function balancedParens(input) {
  const map = { ')': '(', '}': '{', ']': '[' };
  const history = [];
  for (let i = 0; i < input.length; i += 1) {
    if (Object.values(map).includes(input[i])) {
      history.push(input[i]);
    }
    if (Object.keys(map).includes(input[i])) {
      if (map[input[i]] === history[history.length - 1]) {
        history.pop();
      } else return false;
    }
  }
  return history.length === 0;
}

module.exports = balancedParens;
