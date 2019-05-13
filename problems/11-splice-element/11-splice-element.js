/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    try {
    if (someArr.constructor !== Array)
        throw `${someArr}: this is not an array`
    if (!someArr.length)
        throw 'array is empty'
    if (isNaN(index) || typeof(index) === 'boolean')
        throw `${index}: is not a number`

    someArr.splice(index)
    return someArr
    } catch(e){
        return `${e}`
    }
}

let c = [33, 567, 3, 726, 200, 'str', 198, 764, 9];
console.log(spliceElement(c,5));