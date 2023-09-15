/**
 * @param {string} target
 * @return {number}
 
I: binary string
O: count of LEAST amount of flips needed

U: from i -> end of string, all numbers get flipped (flip helper func?)

plan:
    1. create count, flipper help func (if conditional), 
        - flipper logic
            -need : index of ans, ans
            -loop from i, apply 0->1 vice cersa conditional
            -return new s

        - n = length of string
        - s = string length of n initially set to all zeros
    2. loop,
        - check if s[i] = target[i]
            if yes - next iteration
            in no - flip from i -> end, count++, then next iteration
        
 */
var minFlips = function(target) {
   let isFlipped = false;
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (target[i] == 1 && !isFlipped) {
      count++;
      isFlipped = true;
    } else if (target[i] == 0 && isFlipped) {
      count++;
      isFlipped = false;
    }
  }

  return count;
};