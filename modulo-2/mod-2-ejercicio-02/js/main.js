'use strict';

const list = document.querySelector (".js-list");

const item1= "papel higienico";
const price1 = "1.80";
const item2 ="jabon";
const price2="1.20";

const totalIva = parseFloat(price1)+ parseFloat(price2);

let html ="";

html +=`<li> ${item1} ${price1}</li>`;
html +=`<li> ${item2} ${price2}</li>`;

html += `<li> Precio Total: ${totalIva}</li>`;

const total = Math.round (totalIva*0.21);
html+= `<li> Precio total: ${total}</li>`;



list.innerHTML = html;
