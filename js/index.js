const cards = document.querySelector('section.section-cards#section-card')
const searchBar = document.querySelector('input#search-bar.search-input')


function card(prod) {
    return `<div class="cards">
                <div class="product-name"><h3>${prod.model}</h3></div>
                <div class="product-img">
                    <img src="${prod.img}" alt="${prod.model}">
                </div>
                <div class="info-box">
                    <div class="product-size">${prod.size}</div>
                    <div class="product-price">$ ${prod.price}</div>
                    <button class="card-button" id="${prod.id}">Seleccionar</button>
                </div>
            </div>`}

function productAvalaible(array) {
    cards.innerHTML = ''
    if (array.length > 0) {
    array.forEach(prod => cards.innerHTML += card(prod))
    selectItems()
    }
}

productAvalaible(shoesList)

searchBar.addEventListener("search", () => {
    if (searchBar.value.trim() !== ''){
        let returnList = shoesList.filter((prod) => prod.model.toLowerCase().includes(searchBar.value.trim().toLowerCase()))
        productAvalaible(returnList)
    } else if (searchBar.value.trim() === ''){
        productAvalaible(shoesList)
    }
})

function selectItems() {
const cardButtons = document.querySelectorAll('button.card-button')
    cardButtons.forEach((button) =>{
        button.addEventListener('click', ()=> {
            let product = shoesList.find((prod)=> prod.id === parseInt(button.id))
            shoppingCart.push(product)
            saveShoppingCart()
        })
    })
}

