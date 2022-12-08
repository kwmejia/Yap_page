import { cupones } from './data/data.js';
const items = document.querySelector("#items_cupones");

document.addEventListener('DOMContentLoaded', () => {
  console.log(cupones);
  cupones.forEach(cupon => {
    const { id, nombre, usuarios, comercios } = cupon;
    items.innerHTML += `
        <div class="item" id="${id}">
          <p>${nombre}</p>
          <div class="values_items">
            <div class="values_item">
              <span>${usuarios}</span>
              <img src="./img/restaurante.svg" alt="">
            </div>
          </div>
        </div>
    `;
  })
});