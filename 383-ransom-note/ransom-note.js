/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {}
    for(const ch of magazine){
        if(obj[ch]) {
            obj[ch]++
        } else {
            obj[ch] = 1
        }
    }

    console.log(obj)
    for(const ch of ransomNote){
        if(!obj[ch] || obj[ch] === 0) return false
        if(obj[ch]){
            obj[ch]--
        }

    }
    return true
};