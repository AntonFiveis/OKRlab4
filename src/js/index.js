import '../css/css.css'
import Router from "./router";
import Cart from './cart'
const root = document.querySelector('#root')
const router = new Router('root')
const cart = new Cart()
const links = document.querySelectorAll('.nav-item')
const brand = document.querySelector('.navbar-brand')
const total = document.querySelector('#total')
window.addEventListener('load',()=>{
   router.render()
   cart.calcTotal().then((tot)=>total.innerHTML=tot)
})
brand.addEventListener('click',(ev)=>{
   ev.preventDefault()
   window.history.replaceState(null,null,'#')
   router.render()
})
root.addEventListener('change',()=>total.innerHTML = cart.getTotal())
links.forEach(nav_item=>nav_item.addEventListener('click',(ev)=>{
   ev.preventDefault()
   window.history.replaceState(null,null,'#'+ev.target.id.split('_')[0])
   router.render()

}))


