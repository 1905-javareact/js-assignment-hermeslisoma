/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    try {
        if (isNaN(someNum) || typeof(someNum) === 'boolean')
            throw 'is not a number'
        if (someNum === Infinity)
            return Infinity
        if ((someNum & 1) == 0)
            return true
        return false
    } catch(e){
        return `${someNum}: ${e}`
    }
}

console.log(isEven(56));

console.log(isEven(5));

console.log(isEven(Infinity));

console.log(isEven(-5));

console.log(isEven(-56));

console.log(isEven('test'));

let car = {
    year: 1997,
    country: 'USA'
}

console.log(isEven(car));
