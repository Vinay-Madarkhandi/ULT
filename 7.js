/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversed =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) *
    Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};
