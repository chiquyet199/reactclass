export const  formatMoney = number =>{
    let stringNumber = String(number)
    let stringNumberArr = stringNumber.split('')
    let stringNumberArrReversed = stringNumberArr.reverse()
    let result = ""
    stringNumberArrReversed.forEach(function(item, index){
        result += item
        if ((index + 1)%3 === 0){
            result += ","
        }
    })
    result = result.split('').reverse().join('') + 'đ'
    return result[0] === "," ? result.slice(1) : result
 }



//200000 => '200,000'
/**
 * 200000
 * [2,0,0,0,0,0]
 * [0,0,0,0,0,2]
 * [0,0,'0,',0,0,2]
 * [2,0,0,'0,',0,0,0]
 * '200,000'
 */