/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    let p = ''
    let st = false
    for(let key in someObj){
            if (typeof(someObj[key]) != 'object'){
                console.log(`${key}: ${someObj[key]}`)
            } else {                
                console.log(`${key}:`)
                console.log(someObj[key])
            }     
    }
}

let car = {
    engine: "hybrid",
    doors: 2,
    airbags: {
        left: true,
        right: true,
        specs: {
                color: "white",
                size: "big"
        }
    },
    topSeed: 180
}
objectProperties(car)
//printObject(car)
//console.log(car.airbags);
//console.log(JSON.stringify(car));

//console.log(Object.getOwnPropertyNames(car))