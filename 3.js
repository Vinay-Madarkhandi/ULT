/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let maxLength = 0;
    let start = 0;
    let map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }
    
    return maxLength;
};