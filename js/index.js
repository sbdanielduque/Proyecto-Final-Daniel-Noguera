const cards = document.querySelector('section.section-cards#section-card')
const searchBar = document.querySelector('input#search-bar.search-input')
const sizes = document.querySelector('label#sizess')
const URL = 'https://64d045f6ff953154bb78bbfe.mockapi.io/ecommerce'

function card(prod) {
    return `<div class="cards">
                <div class="product-name"><h3>${prod.model}</h3></div>
                <div class="product-img">
                    <img src="${prod.img}" alt="${prod.model}">
                </div>
                <div class="info-box">
                    <div class="product-size">
                        <label id="sizess" for="size">Size: 
                        <select id="sizeList" name="sizeList" id="size">
                            <option selected disabled> -Select Size- </option>
                            ${prod.size.map((talla) => `<option>${talla}</option>`).join('')}
                        </select>
                </label>
                    <div>
                    <div class="product-price">$ ${prod.price}</div>
                    <button class="card-button" id="${prod.id}">Seleccionar</button>
                </div>
            </div>`
        }

function productAvalaible(array) {
    cards.innerHTML = ''
    if (array.length > 0) {
    array.forEach(prod => cards.innerHTML += card(prod))
    selectItems()
    }
}

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
            const card = button.closest('.cards')
            const selectedSize = card.querySelector('select#sizeList').value
            const product = shoesList.find((prod)=> prod.id === parseInt(button.id))
            if (selectedSize > 0) {product.selectedSize = selectedSize
            shoppingCart.push(product)
            saveShoppingCart()
            Toastify({
                text: "Is added to cart",
                duration: 1000,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "black",
                }
            }).showToast()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Select a Size first!',
            })
        }
            
        })
    })
}

function getShoesList() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => shoesList.push(...data))
    .then(() => productAvalaible(shoesList))
}

getShoesList()



