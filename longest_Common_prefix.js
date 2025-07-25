var longestCommonPrefix = function(strs) {
    // declear variable to store the answer
    // sort the array 
    let answer = ""
    strs.sort()
    let f = strs[0]
    let l = strs[strs.length-1]
    let shortWord = Math.min(f.length,l.length)
    for (let i = 0 ; i<shortWord; i++) {
        if (f.charAt(i) != l.charAt(i)) {
            return answer;
        }else{
            answer += f.charAt(i);
        }
    }
    return answer
};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))