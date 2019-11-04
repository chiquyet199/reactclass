const renderHomeContent = state => {
    return `
    <div class="content">
        <span class="mobile-showing">SHOWING 1-22 OF 32 RESULTS</span>
        <div class="menu-item">
            ${state.products.map(product => `
                <div class="dishes">
                    <a href="index.html" class="sale"><img src="${product.img}" alt="Vegetarian Food">
                        ${product.isSale ? '<span class="sale-mark">SALE</span>' : ''}
                    </a>
                    <h4><a href="index.html">${product.name}</a></h4>
                    <p>${product.newPrice}d<span class="discount">${product.oldPrice}d</span></p>
                </div>
            `).join('')}
        </div>
</div>
    `
}