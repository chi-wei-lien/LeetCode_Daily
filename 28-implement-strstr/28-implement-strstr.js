/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
      let temp = i;
      for (let j = 0; j < needle.length; j++) {
          if (temp >= haystack.length) return -1;
          if (haystack.charAt(temp) !== needle.charAt(j)) {
              break;
          }
          if (j === needle.length - 1) {
              return i;
          }
          temp++;
      }
  }
  return -1;
};
