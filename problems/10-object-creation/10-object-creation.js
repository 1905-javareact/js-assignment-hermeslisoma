/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let person = {
    name: 'Daniel',
    age: 22,
    gender: 'male',
    height: 1.72,
    weight: 70
}

function personFunc(name, age, gender, height, weight){
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
    this.weight = weight
}

let newPerson = new personFunc('Esther', 22, 'female', 1.74, 60)

class PersonInfo{
    constructor(name, age, gender, height, weight){
        this.name = name
        this.age = age
        this.gender = gender
        this.height = height
        this.weight = weight
    }
}

let anotherPerson = new PersonInfo('Gaetan', 24, 'male', 1.72, 74)

console.log(person)
console.log(newPerson)
console.log(anotherPerson)




