import { sumIncome } from "../sums/sumIncome.js";

function total(selector, tableData) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    HTML += `<div class="cell"></div>
    <div class="cell"></div>
    <div class="cell">${sumIncome} Eur</div>
    <div class="cell">0.00 Eur</div>
    <div class="cell">0.00 Eur</div>`
    DOM.innerHTML = HTML;
}

export { total }