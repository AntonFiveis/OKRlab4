import '../css/css.css'
import '../html/test.html'
import Router from "./router";
const router = new Router('root')

const links = document.querySelectorAll('.nav-item')
const brand = document.querySelector('.navbar-brand')

brand.addEventListener('click',(ev)=>{
   ev.preventDefault()
   window.history.replaceState(null,null,'#')
   router.render()
})

links.forEach(nav_item=>nav_item.addEventListener('click',(ev)=>{
   ev.preventDefault()
   window.history.replaceState(null,null,'#'+ev.target.id.split('_')[0])
   router.render()
}))

window.addEventListener('load',()=>{
   router.render()
})