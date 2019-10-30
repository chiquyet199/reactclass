const db = {
  shoppingCart: [],
  products: [
    {
      id: "752379268303",
      name: "iphone6",
      price: 1000
    },
    {
      id: "1481147732778",
      name: "note 9",
      price: 1300
    },
    {
      id: "1481147732778",
      name: "xiaomi",
      price: 500
    }
  ]
};

/**
 * Real implementation will look like this
 */
// function getProducts(){
//     return new Promise(function(resolve,reject){
//         window.fetch('myserver.com/api/products')
//             .then(function(data){
//                 resolve(data)
//             }, function(err){
//                 reject(err)
//             })
//     })
// }

/**
 * We dont have a server so we fake it like this
 */
function server_getProducts() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(db.products);
    }, 5000);
  });
}
function server_addToCart(productId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const product = db.products.find(function(item) {
        return item.id === productId;
      });
      const cartItemWithProductId = db.shoppingCart.find(function(item) {
        return item.id === productId;
      });
      if (cartItemWithProductId !== undefined) {
        cartItemWithProductId.quantity += 1;
      } else {
        const cartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        };
        db.shoppingCart.push(cartItem);
      }
      resolve(db.shoppingCart);
    }, 2000);
  });
}
