/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    console.log(typeof(someStr))
    try {
    if (typeof(someStr) !== 'string' && !(someStr instanceof String))
        throw "is not a string nor an instance of String object"
    return someStr.substring(startIndex, endIndex) 
    } catch(e) {
        return `${someStr} ${e}`
    }
}

let stringObject = new String( "This is a String Object" );
let str = 'a String'
console.log(substring(str,0,3));

console.log(substring(stringObject,0,3))

console.log(substring(5,0,3))

console.log(substring(true,0,3))