export function makeCard(pizza) {
    return `
    <div class="container-fluid mt-2" style="background-color: #eee">
        <div class="container">
            <div class="card">
                <img src="${pizza.img}" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title"> ${pizza.title}</h4>
                    <p class="card-text">${pizza.description}</p>
                    
                    <button class="btn btn-primary m-1">Small ${pizza.price[0]}</button>
                    <br>
                    <button class="btn btn-primary m-1">Medium ${pizza.price[1]}</button>
                    <br>
                    <button class="btn btn-primary m-1">Large ${pizza.price[2]}</button>
                </div>
            </div>
        </div>
    </div>
    `
}
export function makeRow(elements){
    return `
    <div class="row"> 
    ${
        elements.map(el=>{
            return `<div class="col-3"> ${el}</div>`
        })
    }
    </div>
    
    `
}