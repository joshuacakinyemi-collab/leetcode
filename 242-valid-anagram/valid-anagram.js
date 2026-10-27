/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sSort = s.split('').sort().join('');
    const tSort = t.split('').sort().join('');
    if (sSort === tSort) {
        return true
    } else {
        return false
    }
    //if(s.length !== t.length) return false;
   // const check = s.split("");
//    for(let i = 0; i < t.length;i++) {
  //  if(check.includes(t[i])) {
    //    const index = check.indexOf(t[i])
      //  check.splice(index, 1);
   // } else {
     //   return false
   // }
   // }
    //return true
};