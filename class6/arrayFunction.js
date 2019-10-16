/**
 * ARRAY METHODS (https://javascript.info/array-methods)
 *                  PURPOSE                                                     Return value
 * => push          Add 1 item to the end                                       Item just added
 * => pop           Remove 1 item at the end                                    Item just removed
 * => shift         Remove 1 item at the begining                               Item just removed
 * => unshift       Add 1 item at the beginning                                 Length of an array after added
 * => find          Find an item in array                                       item matched || undefined 
 * => findIndex     Find index of item in array                                 index number || -1
 * => filter        Find all items match in array                               array include all items matched || []
 * => map           Transform an array to another array                         new array with the same length of the original   
 * => forEach       Loop though an array and do thing => no return              undefined
 * => reduce        Loop though an array and do thing => return any value       defined by you
 * 
 */


let students = [
    {
        name: 'Quyet',
        age: 12,
        score: 10,
    },
    {
        name: 'Quyet',
        age: 10,
        score: 1,
    },
    {
        name: 'Huy',
        age: 14,
        score: 1,
    },
    {
        name: 'Hong',
        age: 15,
        score: 4,
    },
    {
        name: 'Ha',
        age: 10,
        score: 10,
    },
    {
        name: 'Hoang',
        age: 20,
        score: 8,
    },
]

/**
 * Viết 1 function trả về tổng số tuổi của những người có điểm lớn hơn 5
 * Viết 1 function trả về 1 mảng chưa tên của những học sinh có tuổi lớn hơn 10
 * Viết 1 function trả về 1 mảng các học sinh có tuổi lơn hơn 10 và nhỏ hơn 15
 */