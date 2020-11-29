import {makeCartCard} from "../makeCard";


export default function cart_page(data) {
    let order =''
    // console.log(data)
    data.forEach(el=>{
        // console.log(el)
        order+=(makeCartCard(el.pizza,el.size,el.count))
    })
    return`<div class="container-fluid row">
        <div class="col-6">
        ${order}
        </div>
        <div class="col-6">
        <form id="mainForm">
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email"  placeholder="email" required>
        
</div>
<div class="form-group">
        <label for="name">Имя</label>
        <input type="text" class="form-control" id="name"  placeholder="Your name" required>
        
</div>
<div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" class="form-control" id="address"  placeholder="ул..." required>
        
</div>
<div class="form-group">
    <label for="payType">Example select</label>
    <select class="form-control" id="payType">
      <option>Наличные</option>
      <option>Картой через терминал курьера</option>
    </select>
  </div>
<button type="submit" class="btn btn-primary" id="submit">Submit</button>
</form>
</div>

</div>`
}