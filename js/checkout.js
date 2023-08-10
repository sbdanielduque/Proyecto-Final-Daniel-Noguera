const shoppingCards = document.querySelector('section.section-shopping-card')
const buy = document.querySelector('div.total-section')
const buybtn = document.querySelector('button#buyBtn')
const eptyDiv = document.querySelector('div.epty-cart')
const searchBar = document.querySelector('input#search-bar.search-input')
const containerTotal = document.querySelector('section.container-position')

function shoppingCard(prod) {
    return `<div class="cards">
                <div class="product-name"><h3>${prod.model}</h3></div>
                <div class="product-img">
                    <img src="${prod.img}" alt="${prod.model}">
                </div>
                <div class="info-box">
                    <div class="product-size">
                        ${
                            prod.selectedSize
                                ? `Size: ${prod.selectedSize}`
                                : `<label for="size">Size: 
                                    <select id="sizeList" name="sizeList">
                                        <option selected disabled>Select size</option>
                                        ${prod.size.map((talla) => `<option>${talla}</option>`).join('')}
                                    </select>
                                </label>`
                        }
                    </div>
                    <div class="product-price">$ ${prod.price}</div>
                    <button id='${prod.id}' class="delete-button">delete</button>
                </div>
            </div>`;
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
        eptyDiv.innerHTML = ShoppingCartEpty()
    }
}

function buySection(){
    return `<div>
                <div class='total'>Total: $  
                <span class='total-numbers'>${shoppingCart.reduce((acc, prod) => acc + prod.price, 0).toFixed(2)}</span>
                </div>
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
            showShoppingCart()
            saveShoppingCart()
            Toastify({
                text: "Deleted",
                duration: 1000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "black",
                }
            }).showToast();
        })
    })
}

buybtn.addEventListener('click', ()=>{
    const total = document.querySelector('span.total-numbers')
    let totalNum = parseInt(total.innerHTML)
    Swal.fire({
        title: `Your Total is $${totalNum.toFixed(2)}`,
        showDenyButton: true,
        confirmButtonText: 'Buy it',
        denyButtonText: `Don't Buy it`,
        }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear('MyProducts')
            shoppingCart.length = 0
            Swal.fire('Thanks for you Purchase!', '', 'success')
            shoppingCards.innerHTML = ShoppingCartEpty()
            containerTotal.innerHTML = ''
        } else if (result.isDenied) {
            Swal.fire('Purchase canceled', '', 'error')
        }
    })
})


showShoppingCart(shoppingCart)

