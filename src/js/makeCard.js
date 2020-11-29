export function makeCard(pizza, action = 0) {
    return `
    <div class="container-fluid mt-4 card-container" >
        <div class="container py-3">
            <div class="card">
                <img src="${pizza.img}" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца ${pizza.title}</h4>
                    <p class="card-text">${pizza.description}</p>
                    ${action ? `<p style="color:red">Special price -${action}%</p>` : ''}
                    ${
        pizza.price.reduce((accum, curval, idx) => {
            return accum + `<button class="btn btn-success my-1 size-${idx} id-${pizza.id}" >${(idx + 1) * 150}гр ${curval}</button>
                                <br>`
        }, '')
    }
                    
                </div>
            </div>
        </div>
    </div>
    `
}

export function makeRow(elements) {
    return `
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    ${
        elements.reduce((accum, el) => {
            return accum + `<div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> ${el}</div>`
        }, '')
    }
    </div>
    </div>
    `
}


export function makeCartCard(pizza,size, count) {
    return `
    <div class="container w-100 m-2 text-center bg-light" style="border-radius:20px">
        <div class="row align-items-center justify-content-between">
            <img src="${pizza.img}" class="col-2" alt="">
            <div class="d-flex flex-column col-3">
                <h3>${pizza.title}</h3>
                <h5>Вес: ${size*150} грамм</h5>
                <h5>Цена: ${pizza.price[size]}</h5>
            </div>
            <div class="col-3"> Кол-во: <div id="count-${size}-${pizza.id}"> ${count}</div></div>
            <div class="row col-2">
            <button class="btn btn-success size-${size} id-${pizza.id}">+</button>
            <button class="btn btn-danger size-${size} id-${pizza.id}">-</button>
            </div>
        </div>
    </div>
    `
}
