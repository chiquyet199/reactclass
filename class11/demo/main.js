const appState = {
    activePage: 'home',
    cartAmount: 10,
    shoppingCarts: [],
    products: [
        {
            id: '123',
            img: './assest/images/instagram/6.jpg',
            name: 'Orange Juice',
            oldPrice: 24300,
            newPrice: 25000,
            isSale: true
        },
        {
            id: '123',
            img: './assest/images/instagram/5.jpg',
            name: 'Indian Pizza',
            oldPrice: 24000,
            newPrice: 11000,
            isSale: true
        },
        {
            id: '123',
            img: './assest/images/instagram/1.jpg',
            name: 'Spaghetti',
            oldPrice: 20000,
            newPrice: 15000,
            isSale: false
        },
        {
            id: '123',
            img: './assest/images/instagram/2.jpg',
            name: 'Vegetarian Food',
            oldPrice: 400221,
            newPrice: 400000,
            isSale: true
        },
        {
            id: '123',
            img: './assest/images/instagram/3.jpg',
            name: 'Vegetarian Food',
            oldPrice: 50000,
            newPrice: 35000,
            isSale: false
        },
        {
            id: '123',
            img: './assest/images/instagram/4.jpg',
            name: 'Vegetarian Food',
            oldPrice: 20000,
            newPrice: 15000,
            isSale: true
        }
    ]
}

const renderContent = state => {
    const {activePage} = state
    const pageMappers = {
        home: renderHomePage,
        checkout: renderCheckoutPage,
        detail: renderDetailPage,
        login: renderLoginPage
    }
    return pageMappers[activePage](state)
}

const render = state => {
    let rootEl = document.querySelector(".container");

    let template = `
        ${renderNavBar(state)}
        ${renderContent(state)}
        ${renderFooter(state)}
    `;
    rootEl.innerHTML = template;
    bindEvents()
}

const bindEvents = () => {
    document.querySelectorAll('.nav-item').forEach(navItem => {
        navItem.addEventListener('click', () => {
            const page = navItem.getAttribute('data-page')
            appState.activePage = page
            render(appState)
        })
    })
}

render(appState)