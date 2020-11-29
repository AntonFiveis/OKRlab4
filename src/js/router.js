import actions_page from "./actions_page";
import loader from '../html/loader.html'
import Client from "./test.server";
import main_page from "./main-page";
import Cart from "./cart";
import catalog_page from "./catalog_page";

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
                if (!this.cart.getTotal()) {
                    console.log(this.cart.getTotal())
                    window.history.replaceState(null, null, '#')
                    this.render()
                }
                this.root.innerHTML = ''
                break
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
        if(path!='cart')
        this.client.getData(path).then((data) => {

            this.route(path.split('/')[0] || '', data)
        }).catch(() => {
            console.log("error")
            this.route('error')
        })

    }

    makeListenersForButtons() {
        const buttons = document.getElementsByClassName('btn-primary')
        const total = document.getElementById('total')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', async (evt) => {
                const id = +evt.target.classList[evt.target.classList.length - 1]
                const size = +evt.target.classList[evt.target.classList.length - 2]
                await this.cart.addToCart(size, id)
                total.innerHTML = this.cart.getTotal()
            })
        }
    }
}

