/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // find way to seperate string
    // add to string based on number/letter
    const stack = []
    let currNum = 0
    let currString = ''  
    for(const string of s){
        // check if [ is there then push current string until the amount of the time are done
        if(!isNaN(string)){
            currNum = currNum * 10 + Number(string)
        } else if(string === '[') {
            stack.push([currString, currNum])
            currString = ''
            currNum = 0
        } else if(string === ']'){
            let [prevStr, i] = stack.pop()
            currString = prevStr + currString.repeat(i)
        } else {
            currString += string
        }
    }
    return currString
};