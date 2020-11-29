import Client from "./test.server";
export default class Cart{
    constructor(client=undefined) {
        this.client = client?client: new Client()
    }

    async addToCart(size,id){
        let cart = this.getCart()

        const idx = cart.findIndex((el)=>el.id==id&&el.size==size)
        if(idx!= -1){

            cart[idx].count+=1
        }else{
            cart.push({id,size,count:1})

        }
        await this.calcTotal()
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    async calcTotal(){
        let catalog = await this.client.getData('catalog')
        // console.log(catalog)
        const cart = this.getCart()
        this.total = 0
        cart.forEach((el)=>{
            this.total+=catalog[el.id].price[el.size]*el.count
        })
        return this.total
    }
    getTotal()
    {
        return this.total
    }
    getCart(){
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));

            return []
            this.total = 0
        } else {
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
}