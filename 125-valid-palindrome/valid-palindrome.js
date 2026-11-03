/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    var isAlnum = function(c) {
        const ch = c.toLowerCase()
        return ('a' <= ch && ch <= 'z') || ('0' <= ch && ch <= '9')
    }

    let left = 0
    let right = s.length-1

    while(left < right){
        if(!isAlnum(s[left])) { left++; continue }
        if(!isAlnum(s[right])) { right--; continue }

        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }
    return true
};