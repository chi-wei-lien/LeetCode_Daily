/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (!map.has(char)) {
      map.set(char, 1);
    }
    else {
      let prev = map.get(char);
      map.set(char, prev + 1);
    }
  }  
  for (let i = 0; i < t.length; i++) {
    let char = t.charAt(i);
    if (!map.has(char)) return false;
    let prev = map.get(char);
    if (prev === 1) {
      map.delete(char);
    }
    else {
      map.set(char, prev - 1);
    }
  }
  return map.size == 0 ? true : false;
};