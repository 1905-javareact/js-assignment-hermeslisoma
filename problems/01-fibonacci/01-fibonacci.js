/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    try {
        if (isNaN(n) || typeof(n) === 'boolean')
            throw 'is not a number'
        if(n === Infinity)
            return Infinity
        let a = 0, b = 1, c

        if (n < 3) {
            if (n < 0) 
                return fib(-n)
            if (n == 0) 
                return 0
            return 1
        }

        while(--n)
            c = a + b, a = b, b =c

        return c
    } catch(e){
        return `${n}: ${e}`
    }
}

let car = {
    year: 1997,
    country: 'USA'
}

console.log(fib(500));
console.log(fib('tgh'));
console.log(fib(true));
console.log(fib(car));
console.log(fib(Infinity));

