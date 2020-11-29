import Client from "./test.server";
export default class Cart{
    constructor(client=undefined) {
        this.client = client?client: new Client()
    }

    deleteFromCart(size, id){
        let cart = this.getCart()
        const idx = cart.findIndex((el)=>el.id==id&&el.size==size)
        if(idx!=-1){
            // console.log(cart[idx])
            cart[idx].count-=1
            if(cart[idx].count<1)
                cart.splice(idx,1)
        }
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    clearCart(){
        localStorage.setItem('cart',[])
    }
    addToCart(size,id){
        let cart = this.getCart()

        const idx = cart.findIndex((el)=>el.id==id&&el.size==size)
        if(idx!= -1){

            cart[idx].count+=1
        }else{
            cart.push({id,size,count:1})

        }
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    async calcTotal(){
        let catalog = await this.client.getData('catalog')

        const cart = this.getCart()
        let total = 0
        cart.forEach((el)=>{
            // console.log(catalog[el.id-1])
            total+=(catalog[el.id-1].price[el.size]*el.count)
        })
        return total
    }
    getCart(){
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));

            return []
        } else {
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
}