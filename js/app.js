import { API_DATA } from "./export.js"
import { API_DATA2 } from "./export.js"

var data1 = await API_DATA();
let api_links = document.querySelector(".api_links");




const renderHtml = (products) => {
  
  let card = "";

  products.map((food) => {
    card +=
      `<div class="col-md-3">
             <div class="card mb-3">
               <img src="${food.img}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title">${food.name}</h5>
               <p class="card-text">${food.description}</p>
               <p class="card-text">price: ${food.price}$</p>
               <a href="#" class="btn btn-primary">add to book</a>
               </div>
             </div>
           </div>
         `
  })

  api_links.innerHTML = card;
}

renderHtml(data1)

// let cartBtn = document.querySelectorAll("")


var filterBtns = document.querySelectorAll('.btn-filter')


filterBtns.forEach((button) => {
  button.addEventListener('click', productFilter)
})

async function productFilter(button) {

  const filters = {
    isVeg: button.target.attributes['is-veg'].value
  }
  var response = await API_DATA(filters);
  renderHtml(response)
}