/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr){
    try{
        if (typeof(someStr) !== 'string' && !(someStr instanceof String))
            throw 'is neither a string nor an object string' 
        let lowSomeStr = someStr.toLowerCase().replace(/[^A-Za-z0-9]/g,'')
        let len = lowSomeStr.length
        for(let i=0; i<len/2; i++){
            if(lowSomeStr[i] !== lowSomeStr[len-1-i])
                return false
        }
        return true
    } catch(e){
        return `${someStr}: ${e}`
    }
}


console.log(isPalindrome('racecar'))
console.log(isPalindrome('racebigcar'))
console.log(isPalindrome('A man, a plan, a canal. Panama yeah!'))
console.log(isPalindrome(343))