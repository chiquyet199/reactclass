function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
  }

  let appState = {
    activePage: "products",
    shoppingCart: [],
    products: [],
  };

  function renderNavBar(state) {
      const cartLength = state.shoppingCart.reduce(function(sum, item){
        sum +=item.quantity
        return sum
      }, 0)
    return `
      <nav>
        <ul>
            <li data-page="home" class="nav-item ${state.activePage === "home" ? "active" : ""}">home</li>
            <li data-page="products" class="nav-item ${state.activePage === "products" ? "active" : ""}">products</li>
        </ul>
        <span data-page="checkout" class="nav-item shopping-cart">Cart (${cartLength})</span>
      </nav>
      `;
  }

  function renderContent(state) {
    if (state.activePage === "home") {
      return renderHomePage(state);
    } else if (state.activePage === "products") {
      return renderProductPage(state);
    } else if (state.activePage === "checkout") {
      return renderCheckoutPage(state);
    }
  }

  function renderCheckoutPage(state){
      if(state.shoppingCart.length === 0){
          return `<h1>You've buy nothing. Go shopping !!!</h1>`
      }
      const totalPrice = state.shoppingCart.reduce((sum, item) => {
        sum = sum + item.price * item.quantity
        return sum
      }, 0)
      const shoppingCartEls = state.shoppingCart.map(function(item){
          return `<div>
                <span>${item.name}</span>
                <span>${item.quantity}</span>
            </div>`
      }).join('')

      return `
        <div>
            ${shoppingCartEls}
            <span>Total price: ${totalPrice}</span>
        </div>
      `
  }

  function renderHomePage(state) {
    return `<h1>This is homepage</h1>`;
  }

  function addToCart(productId){
      alert(productId)
  }

  function renderProductPage(state) {
    const listProducts = state.products
      .map(function(product) {
        return `
            <div class="product">
                <h3>${product.name}</h3>
                <span>${product.price}$</span>
                <button data-id="${product.id}" class="add-to-card">${product.isAdding ? 'adding...' : 'Add to Cart'}</button>
            </div>
            `;
      })
      .join("");

    return `
        <div class="page products">
            <div class="content">
                ${listProducts ? listProducts : `<p style="color: blue">Loading...</p>`}
            </div>
        </div>
      `;
  }

  function render(state) {
    let rootEl = document.querySelector("#root");

    let template = `
        ${renderNavBar(state)}
        ${renderContent(state)}
    `;
    rootEl.innerHTML = template;
    bindEvents();
  }

  function bindEvents() {
    document.querySelectorAll(".nav-item").forEach(function(navItem) {
      navItem.addEventListener("click", function() {
        let page = navItem.getAttribute("data-page");
        appState.activePage = page;
        render(appState);
      });
    });

    document.querySelectorAll(".add-to-card").forEach(function(addToCartBtn) {
      addToCartBtn.addEventListener("click", function() {
        const productId = addToCartBtn.getAttribute('data-id')
        const product = appState.products.find(p => p.id === productId)
        product.isAdding = true
        render(appState)
        server_addToCart(productId).then(function(shoppingCart){
          product.isAdding = false
          appState.shoppingCart = shoppingCart
          render(appState)
        })
      });
    });
  }

  render(appState);

  server_getProducts().then(function(products){
    appState.products = products
    render(appState)
  })