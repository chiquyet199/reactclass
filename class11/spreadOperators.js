/**https://javascript.info/destructuring-assignment */

/**
 * Use to replace concat function in  array
 */
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)    // arr3 = [1,2,3,4,5,6]
let arr4 = [...arr1, ...arr2]   // arr4 = [1,2,3,4,5,6]
let arr5 = [...arr2, ...arr1]   // arr5 = [4,5,6,1,2,3]
let arr5 = [...arr2, arr1]   // arr5 = [4,5,6,[1,2,3]] arr5[3][0]
let arr5 = [...arr2,0, ...arr1]   // arr5 = [4,5,6,0,1,2,3]


/**
 * Use to Copy object by value
 */
let person = {
    name: 'Quyet',
    age: 12,
    isMarried: true
}
let admin = {
    ...person,
    name: 'Admin'
}
person.name = "Huy"
console.log(admin.name) // => "Admin"
let admin2 = {
    name: 'Admin',
    ...person,
}
//admin2.name = "Quyet"

/**
 * Destructuring object
 * line 31 <=> line 28 29 30
 */
const name = person.name
const isMarried = person.isMarried
const age = person.age
const {name, age, isMarried} = person

function logPersonInfo1(person){
    console.log('name', person.name)
    console.log('age', person.age)
    console.log('isMarried', person.isMarried)
}
function logPersonInfo2(person){
    const {name, age, isMarried} = person
    console.log('name', name)
    console.log('age', age)
    console.log('isMarried', isMarried)
}
function logPersonInfo3({name, age, isMarried}){
    console.log('name', name)
    console.log('age', age)
    console.log('isMarried', isMarried)
}
logPersonInfo1(person)
logPersonInfo2(person)
logPersonInfo3(person)
let person1 = {name: 'aa', age: 12}
logPersonInfo3(person1) // log isMarried = undefined

