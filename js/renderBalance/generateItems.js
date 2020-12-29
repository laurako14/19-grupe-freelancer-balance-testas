function generateItems(selector, tableData) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const count = tableData.months.length;
    for (let i = 0; i < count; i++) {
    const line = tableData.account[i];
    HTML += `<div class="table-row">
    <div class="cell">${line.month}</div>
    <div class="cell">${tableData.months[i]}</div>
    <div class="cell">${line.income} Eur</div>
    <div class="cell">-</div>
    <div class="cell">150.00 Eur</div>
</div>`
    }
    DOM.innerHTML = HTML;
}

export { generateItems }