/**
 * Syntax: function functionName(){
 *    //Function content
 * }
 * Execute function by calling. functionName()
 * 
 */

/**Declare function */
function sayHello() {
  console.log('Hello')
}

const sayHi = function() {
  console.log('hi')
}

const sayYeah = () => {
  console.log('yeah')
}

/**Function parameter 
 * Order matter
*/
const fName = "Nguyen"
const lName = "Quyet"
const sayHelloName = (firstName, lastName) => {
  console.log('hello ' + firstName + ' ' + lastName)
}
sayHelloName(fName,lName)
let a = sayHelloName("Le",lName)



/**Function return value */
const sum = (num1, num2) => {
  return num1 + num2
}
const total = sum(1, 2)

/**Default parameter */
const sumWithDefaultParam = (num1, num2 = 0) => {
  return num1 + num2
}
const total1 = sumWithDefaultParam(1,2,3)

/**Note
 * function with 1 parameter, we can write it without ()
 * 
 */
const helloName = name => {
  console.log(name)
}

/**Note
 * Function return with only 1 statement of code, we can write like this
 */
const sumShortVerion = (num1, num2) => num1 + num2