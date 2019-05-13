/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    try{
        if (numArray.constructor !== Array)
            throw 'this variable is not an array'
        if (!numArray.length)
            throw 'array is empty'
        if (numArray.some(isNaN))
            throw 'some or all elements of array are not numbers'
        let swapped;
        do {
            swapped = false;
            for(let i = 0; i < numArray.length - 1; i++) {
                if (numArray[i] > numArray[i+1]) {
                    let temp = numArray[i]
                    numArray[i] = numArray[i+1]
                    numArray[i+1] = temp
                    swapped = true
                    }
                }
        } while(swapped)
        return numArray
    } catch(e){
        return `${e}`
    }
}

let a = [33, 567, 3, 726, 200, 984, 198, 764, 9];
console.log(bubbleSort(a))

let b = 23
console.log(bubbleSort(b))

console.log(bubbleSort([]))

let c = [33, 567, 3, 726, 200, 'str', 198, 764, 9];
console.log(bubbleSort(c))










