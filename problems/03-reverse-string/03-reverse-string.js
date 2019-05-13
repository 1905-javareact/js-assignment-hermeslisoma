/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    try {
        if (typeof(someStr) !== 'string' && !(someStr instanceof String))
            throw 'is neither a string nor a string object'
        let reverse = ''

        for(let i = someStr.length - 1; i >= 0; i--)
            reverse += someStr[i]
        return reverse
    } catch(e){
        return `${someStr}: ${e}`
    }
}

let str = 'Reverse String'
console.log(reverseStr(str));

let num = 234
console.log(reverseStr(num));

let newStr = new String('string object')
console.log(reverseStr(newStr));

let arr = ['this','is','not','a','string']
console.log(reverseStr(arr));











