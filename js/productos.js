shoesList = [{id: 0, model: 'Forum Bad Bunny Blue', brand:'Adidas', img: '../img/adidas-Forum-Buckle-Low-Bad-Bunny-Blue-Tint-Product-removebg-preview.png', size: [6, 7, 8, 8.5, 9, 9.5], price: 199},
            {id: 1, model: 'Forum Bad Bunny Pink', brand:'Adidas', img: '../img/adidas-Forum-Low-Bad-Bunny-Pink-Product-removebg-preview.png', size: [4.5, 5, 7, 8, 10], price: 199},
            {id: 2, model: 'Air jordan 1 "Chicago Lost"', brand:'Nike', img: '../img/Air-Jordan-Background-PNG-Image.png', size:[8, 9, 9.5, 10, 12], price: 249},
            {id: 3, model: 'Jordan Retro 1 "Off White"', brand:'Nike', img: '../img/Air-Jordan-Download-Free-PNG.png', size:[10, 10.5, 11, 12], price: 999},
            {id: 4, model: 'Jordan Retro 1 "University Blue"', brand:'Nike', img: '../img/Air-Jordan-PNG-Pic-Background.png', size: [8, 8.5, 9, 9.5, 10], price:349},
            {id: 5, model: 'Jordan 11 "Retro Concord"', brand:'Nike', img: '../img/Air-Jordan-Transparent-Images.png', size: [7, 8, 9, 9.5, 10, 10.5], price:399},
            {id: 6, model: 'Jordan Retro 4 "Bred"', brand:'Nike', img: '../img/jordan-4-removebg-preview.png', size:[6, 6.5, 7, 8, 8.5, 10], price: 299},
            {id: 7, model: 'Nike Air Force 1', brand:'Nike', img: '../img/Nike-Air-Force-1-Low-White-07_V2-Product-removebg-preview.png', size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10], price: 99},
            {id: 8, model: 'Nike Dunk "Panda"', brand:'Nike', img: '../img/nike-dunk-panda-removebg-preview.png', size: [7, 9, 9.5, 11], price: 139},
            {id: 9, model: 'Nike Dunk "Sand"', brand:'Nike', img: '../img/nike-dunk-sand-removebg-preview.png', size:[6, 6.7, 10, 11], price: 239},
            {id: 10, model: 'Nike Dunk "Travis Scott" ', brand:'Nike', img: '../img/Nike-SB-Dunk-Low-Travis-Scott-Product-removebg-preview.png', size:[7,8,10,11], price: 1079},
            {id: 11, model: 'Adidas Ozweego "Sand"', brand:'Adidas', img: '../img/ozweego-cream-removebg-preview.png', size:[7, 7.5, 8, 8.5, 9, 9.5, 10], price:119},
            {id: 12, model: 'Yeezy Boost 700 "Wave"', brand:'Yeezy', img: '../img/yeezt-700.png', size:[8, 8,5, 9, 9.5, 10], price: 379},
            {id: 13, model: 'Yeezy Boost 350 "Bone"', brand:'Yeezy', img: '../img/yeezy-350-boost-v2-bone-removebg-preview.png',size: [7, 8, 8.5, 9, 10], price: 249},
            {id: 14, model: 'Yeezy Foam "RNNR', brand:'Yeezy', img: '../img/yeezy-foam-removebg-preview.png', size: [5, 5.5, 6, 7, 7.5, 10], price: 129},]

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