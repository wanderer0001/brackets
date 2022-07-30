module.exports = function check(str, bracketsConfig) {

  function isBracketsOk(str) {
    if (str.length % 2) return false;

    const stack = [];

    for (const currentSymbol of str) {
      for (const [first, second] of bracketsConfig) {
        const topElement = stack[stack.length - 1];

        if(currentSymbol === second && topElement === first) {
          stack.pop();
        } else if(currentSymbol === first) {
          stack.push(currentSymbol);
        }
      }
    }

    return stack.length === 0;
  }

  return isBracketsOk(str);
}


