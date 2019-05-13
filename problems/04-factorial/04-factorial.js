/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    try{
        if(isNaN(sumNum) || typeof(sumNum) === 'boolean')
            throw 'is not a number'
        if(sumNum < 0) 
            throw 'number must be positive'
        if (sumNum === Infinity)
            return Infinity
        if (sumNum == 0) 
            return 1
        return (sumNum * factorial(sumNum - 1))
    } catch(e){
        return `${sumNum}: ${e}`
    }
}

console.log(factorial(5))

console.log(factorial('string'))

console.log(factorial(-5))

console.log(factorial(Infinity))

console.log(factorial(true))

