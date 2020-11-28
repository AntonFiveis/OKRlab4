import render from "./render";
const links = document.querySelectorAll('.nav-item')

links.forEach(navelem=>navelem.addEventListener('click',(ev)=>{
    ev.preventDefault()
    window.history.replaceState(null,null,'#'+ev.target.id.split('_')[0])
    render()
}))


