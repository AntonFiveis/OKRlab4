import carousel from '../html/carousel.html'
import {makeCard,makeRow} from './make-card'
export default function main_page(data) {
    const first3pizzas =[makeCard(data.catalog[0]), makeCard(data.catalog[1]), makeCard(data.catalog[2])]

    return carousel+makeRow(first3pizzas)
}


