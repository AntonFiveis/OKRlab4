import {makeCard,makeRow} from "./makeCard";

export default function catalog_page(data){
    let pizzas = []
    data.forEach((pizza)=>
    {
        pizzas.push(makeCard(pizza))
    })

    const title = '<div class="container"><h1>Наше меню</h1></div>'
    return title+makeRow(pizzas)
}