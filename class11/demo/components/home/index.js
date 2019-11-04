
console.log('call function renderHomeSidebar')
const renderHomePage = state => {
    return `
        ${renderHomeContent(state)}
        ${renderHomeSidebar(state)}
    `
}