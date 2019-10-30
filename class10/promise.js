/**
 * PROMISE
 * Là 1 object dùng để chứa 1 giá trị(được hứa sẽ trả về trong tương lại)
 *
 */

/**
 * Cách khởi tạo 1 Promise
 */

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let randomNumberFrom0to9 = Math.floor(Math.random() * 10);
    console.log("randomNumberFrom0to9", randomNumberFrom0to9);
    if (randomNumberFrom0to9 > 5) {
      resolve({ data: "promise resolved" });
    } else {
      reject({message: "random number less than 5"});
    }
  }, 3000);
});

promise.then(successHandler, errorHandler);

function successHandler(data) {
  console.info(data);
}
function errorHandler(err) {
  console.warn(err);
}

/**
 * Handle asynchronus code with callback
 * render order: 1 => 2 => data
 */

console.log(1);
let promise = window.fetch("https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2");
promise.then(
  function(data) {
    console.log(data);
    //re-render app with data returned from server
  },
  function() {
    //display error message
  }
);
console.log(2);

/**
 * async / await
 * render order: 1 => data => 2
 */
console.log(1);
try{
    let data = await window.fetch("https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2");
    console.log(data)
    //re-render app with data returned from server
}catch(err){
    //display error message
}
console.log(2);


window.fetch(url, {
    method: 'POST',
    headers: {
        Authorization: 'alksjdqywd120498ndcj0q3doas0d2'
    }
})

/**Example: xử lý code bất đồng bộ bằng callback */
function addToCart(product){
    window.fetch('myserver.com/api/carts', {method: 'POST', data: product})
    .then(function(){
        appState.shoppingCart.push(product)
        render(appState)
    },function(err){
        {err: 'out of stock'}
        appState.errMessage = err.message
        render(appState)
    })
}

/**Example: xử lý code bất đồng bộ bằng async/await */
async function addToCart(product){
    try{
        await window.fetch('myserver.com/api/carts', {method: 'POST', data: product})
        appState.shoppingCart.push(product)
        render(appState)
    }catch(err){
        // {err: 'out of stock'}
        appState.errMessage = err.message
        render(appState)
    }
}

/** 
 * Promise được sử dụng bằng 2 cách, dùng callback hoặc async/await
 * Code nào có sử dụng Promise thì đươc gọi là bất đồng bộ (asynchronus)
*/