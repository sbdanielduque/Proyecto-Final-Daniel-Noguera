const shoppingCards = document.querySelector('section.section-shopping-card')
const buy = document.querySelector('section.buy-section')

function shoppingCard(prod) {
    return `<div class="cards">
                <div class="product-name"><h3>${prod.model}</h3></div>
                <div class="product-img">
                    <img src="${prod.img}" alt="${prod.model}">
                </div>
                <div class="info-box">
                    <div class="product-size">${prod.size}</div>
                    <div class="product-price">$ ${prod.price}</div>
                    <button id='${prod.id}'class="delete-button">delete</button>
                </div>
            </div>`
}

function showShoppingCart() {
    shoppingCards.innerHTML = ''
    if (shoppingCart.length > 0) {
        shoppingCart.forEach((prod) => {
            shoppingCards.innerHTML += shoppingCard(prod)
        })
        buy.innerHTML = buySection()
        deleteItem()
    } else{
        shoppingCards.innerHTML = ShoppingCartEpty()
    }
}

function buySection(){
    return `<div class='section-container'>
                <div class='total'>Total: $  
                <span class='total-numbers'>${shoppingCart.reduce((acc, prod) => acc + prod.price, 0).toFixed(2)}</span>
                </div>
                <button class="buy-button">BUY here</button>
            </div>`
}

function ShoppingCartEpty(){
    return `
        <div class="epty">
            <div class="epty-container">
                <div> Your Shopping Cart is Epty</div>
                <div class="click-below">click below</div>
                <a href="../index.html" class="epty-link">
                please come back to our store and select some of our products
                </a>
            </div>
        </div>`
}

function deleteItem() {
    const deleteButton = document.querySelectorAll('button.delete-button')
    let localStorageLength = JSON.parse(localStorage.getItem('MyProducts'))
    deleteButton.forEach((dltbtn) => {
        dltbtn.addEventListener('click', ()=>{
            let findIndexLocalStorage = localStorageLength.findIndex(prod => prod.id === parseInt(dltbtn.id))
            shoppingCart.splice(findIndexLocalStorage, 1)
            saveShoppingCart()
            location.reload()
        })
    })
}

showShoppingCart(shoppingCart)

