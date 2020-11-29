import carousel from '../html/carousel.html'
import {makeCard,makeRow} from './makeCard'
export default function main_page(data) {
    const greeting = '<div class="container"> <h1>Добро пожаловать на сайт Domino\'s Pizza</h1></div>'
    const title4pizzas='<div class="container m-5 "><h1>Пиццы месяца</h1></div>'

    let recommended =[]
    data.recommended.forEach((pizza_id)=>{
        recommended.push(makeCard(data.catalog[pizza_id]))
    })
    const titleActions ='<div class="container m-3"><h1>Горячие акции!</h1></div>'
    const actions = [makeCard(data.catalog[data.actions[0].pizza_id]), makeCard(data.catalog[data.actions[1].pizza_id])]
    return greeting +carousel+ title4pizzas +makeRow(recommended) +titleActions+makeRow(actions)
}


