const renderNavBar = state => {
    return `
    <div class="header">
        <a href="index.html"><i class="fas fa-bars" aria-hidden="true"></i></a>
        <h1 class="menu-page"><a href="index.html">Foods Conner</a></h1>
        <a data-page="home" class="nav-item menu-searching cover"><i class="fas fa-search icon-cover" aria-hidden="true"></i></a>
        <a data-page="login" class="nav-item menu-login cover"><i class="far fa-address-book icon-cover" aria-hidden="true"></i></a>
        <a data-page="checkout" class="nav-item shopping-cart icon cover">
            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
            <i class="cart-amount">${state.cartAmount}</i>
        </a>
        <ul class="menu_listing">
            <li class="has-child"><a href="index.html">HOME</a>
                <ul class="menu-child">
                    <li class="sub-menu"><a href="index.html">Breakfast</a></li>
                    <li class="sub-menu"><a href="index.html">Lunch</a></li>
                    <li class="sub-menu"><a href="index.html">Snack Time</a></li>
                </ul>
            </li>
            <li><a href="index.html">PAGES</a></li>
            <div class="clear"></div>
        </ul>
        <div class="clear"></div>
    </div>
    `
}