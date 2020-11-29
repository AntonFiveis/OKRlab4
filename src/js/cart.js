export default class Cart{
    constructor() {
        if (localStorage.getItem('notes') === null) {
            localStorage.setItem('cart', JSON.stringify([]));
            this.cart = []
        } else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }

    addToCart(size,id){

    }
}