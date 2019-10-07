/**
 * TYPE CONVERSION
 * Reference document: https://javascript.info/type-conversions
 * 
 */

 /**STRING CONVERSION */
String(12) //=>>>"12"
String(false) //=>>>"false"
String(true) //=>>>"true"
String(null) //=>>>"null"
String(undefined) //=>>>"undefined"
String([1,2,3]) //=>>>"1,2,3"
String(function sum(num1, num2){ return num1 + num2;}) 
//=>>>"function sum(num1, num2){ return num1 + num2;}"
String({name: "Quyet"}) //=>>>"[object Object]"

/**NUMBER CONVERSION */

Number(undefined)   // =>>	NaN
Number(null)        // =>>	0
Number(true)        // =>>  1
Number(false)        // =>>  0
Number(string)	
/**
 * Whitespaces from the start and end are removed. 
If the remaining string is empty, the result is 0. 
Otherwise, the number is “read” from the string. 
An error gives NaN.
 */
Number('   123    ')        //=>> 123
Number('123a')              //=>> NaN
Number('')                  //=>> 0

//NOTE:     operator + 

/**BOOLEAN CONVERSION */
Boolean(null)       // =>>false
Boolean(undefined)  // =>>false
Boolean(123)        // =>>true
Boolean(0)          // =>>false
Boolean('hello')    // =>>true
Boolean('')         // =>>false