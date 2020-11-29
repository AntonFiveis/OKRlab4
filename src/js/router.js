import actions_page from "./pages/actions_page";
import loader from '../html/loader.html'
import Client from "./test.server";
import main_page from "./pages/main-page";
import Cart from "./cart";
import catalog_page from "./pages/catalog_page";
import cart_page from "./pages/cart_page";

export default class Router {
    constructor(rootID) {
        this.root = document.getElementById(rootID)
        this.client = new Client()
        this.cart = new Cart(this.client)
    }


    route(path, data = {}) {

        switch (path) {
            case 'catalog':
                this.root.innerHTML = catalog_page(data)
                this.makeListenersForButtons()
                break
            case 'cart':
                this.cart.calcTotal().then((result)=>{
                    if (!result) {
                        window.history.replaceState(null, null, '#')
                        this.render()
                    }else {
                        // console.log(result)
                        // console.log(this.cart.calcTotal())
                        this.root.innerHTML = cart_page(data)
                        this.makeListenersForButtons()
                        this.makeListenerForForm()
                    }
                })

                break;
            case 'loading':
                this.root.innerHTML = loader
                break;
            case 'actions':
                this.root.innerHTML = actions_page(data)
                this.makeListenersForButtons()
                break;
            case '':
                this.root.innerHTML = main_page(data)
                this.makeListenersForButtons()
                break;

            default:
                window.history.replaceState(null, null, '#')
                this.render()
                break;

        }
    }

    render() {
        const path = window.location.hash.split('#')[1] || ''
        // console.log(parseQuery(path))
        this.route('loading')
        // console.log(path)
        if (path != 'cart') {
            this.client.getData(path).then((data) => {
                this.route(path.split('/')[0] || '', data)
            }).catch(() => {
                // console.log("error")
                this.route('error')
            })
        } else {
            const cart = this.cart.getCart()
            this.client.getData('catalog').then((catalog) => {
                // console.log(catalog)
                let data = []
                cart.forEach(el => {
                    let data_item = {}
                    data_item.pizza = catalog[el.id - 1]
                    data_item.count = el.count
                    data_item.size = el.size
                    data.push(data_item)
                })
                // console.log(data)
                this.route('cart', data)
            })

        }

    }

    makeListenersForButtons() {
        const buttonsClasses = ['btn-success', 'btn-danger']
        buttonsClasses.forEach((btnClss) => {
            const buttons = document.getElementsByClassName(btnClss)
            // console.log(buttons)
            const total = document.getElementById('cart_total')
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', (evt) => {
                    const id = +(evt.target.classList[evt.target.classList.length - 1].split('-')[1])
                    const size = +(evt.target.classList[evt.target.classList.length - 2].split('-')[1])
                    // console.log(id,size)
                    let count =document.querySelector(`#count-${size}-${id}`)
                    if (btnClss == buttonsClasses[0]) {
                        this.cart.addToCart(size, id)
                        if(count)
                            count.innerHTML =+(count.innerHTML)+1
                    }
                    if (btnClss == buttonsClasses[1]) {
                        this.cart.deleteFromCart(size, id)
                        if(count) {
                            count.innerHTML = +(count.innerHTML) - 1
                            if(+count.innerHTML<=0)
                                this.render()
                        }
                    }


                    this.cart.calcTotal().then((totalpr)=>total.innerHTML= totalpr)
                })
            }
        })

    }
    makeListenerForForm(){
        const formElem=document.getElementById('mainForm')
        formElem.onsubmit = async (e) => {
            e.preventDefault();

            this.client.post( {form:new FormData(formElem),cart:this.cart.getCart()})

            this.cart.clearCart()
            document.getElementById('cart_total').innerHTML=0
            this.render()
        };
    }

}

