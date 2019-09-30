/**
 * 
 * syntax: keyword variableName = value
 * 
 * keyword: var - let - const
 *  var sử dụng để khai báo biến trong javascript cũ
 *  let sử dụng để khai báo biến trong javascript mới. => khuyến khích xài
 *    let và var có điểm khác nhau, nhưng bài nâng cao sẽ nói
 *  const cũng có thể dùng để khai báo biến, nhưng không thể gán lại giá trị mới
 * 
 * variableName: https://javascript.info/variables
 *  Đặt tên biến có nghĩa 
 *  Không dùng ký tự đặc biệt
 */

var a = 1;
let b = 2;
const PI = 3.14;
// PI = 3.15;
b = 3;
var c = a + b + PI;

console.log(c)