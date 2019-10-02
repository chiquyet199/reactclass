/**
 * https://javascript.info/types
 */

/** STRING */
const firstName = 'NGuyen'
const lastName = 'QUyet'
const fullName = firstName + ' ' + lastName
const sayHello = `say hello to user: "${firstName} ${lastName}"` //template string


/**Number 
 * + - * / %
*/
let age = 12

/**NaN */
let num1 = 1
let num2 = "a"
let num3 = num1 * num2

/**Boolean */
let isMarried = true

/**null <=> empty value */
let car = null

/**undefined <=> variable doesn't have a value assigned */
let hello

/**object */
let user = {
  name: 'Quyet',
  age: 12,
  isMarried: false,
  car: {
    model: 'Ford',
    price: 4000
  },
  printName: function(){
    console.log('Quyet')
  }
}

let names = ["Quyet", "An", "Hoa", 1, null, undefined, false, user]
