import {makeRow,makeCard} from "./makeCard";
export default function actions_page(data) {
    let title = '<div class="container actions-title"><h1>Лучшие акции месяца!</h1></div>'
    let pizzas = []
    data.forEach((pizza)=>{
        pizzas.push(makeCard(pizza.action_pizza,pizza.action))
    })
    return title+makeRow(pizzas)

}