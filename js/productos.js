shoesList = []

function saveShoppingCart(){
    if (shoppingCart.length >= 0) {
        localStorage.setItem('MyProducts', JSON.stringify(shoppingCart))
    }
}

function getShoppingCart(){
    if (localStorage.getItem('MyProducts')){
        return JSON.parse(localStorage.getItem('MyProducts'))
    }else{
        return []
    }
}

const shoppingCart = getShoppingCart()

