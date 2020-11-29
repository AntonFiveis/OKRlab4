
export function makeCard(pizza, action=0) {
    return `
    <div class="container-fluid mt-4 card-container" >
        <div class="container py-3">
            <div class="card">
                <img src="${pizza.img}" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца ${pizza.title}</h4>
                    <p class="card-text">${pizza.description}</p>
                    ${action? `<p style="color:red">Special price -${action}%</p>`:''}
                    ${
                        pizza.price.reduce((accum,curval,idx)=>{
                            return accum+`<button class="btn btn-primary my-1 ${idx} ${pizza.id}" >${(idx+1)*150}гр ${curval}</button>
                                <br>`
                        },'')
                     }
                    
                </div>
            </div>
        </div>
    </div>
    `
}
export function makeRow(elements){
    return `
<div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    ${
        elements.reduce((accum,el)=>{
            return accum+`<div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> ${el}</div>`
        },'')
    }
    </div>
    </div>
    `
}
