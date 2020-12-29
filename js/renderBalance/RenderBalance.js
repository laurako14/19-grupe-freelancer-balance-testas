class RenderBalance {
    constructor(selector, data, selector2) {
        this.selector = selector;
        this.selector2 = selector2;
        this.data = data;

        this.init();
    }

    init() {
        this.generateItems();
        this.generateTotal();
    }

    generateItems() {
        const DOM = document.querySelector(this.selector);
        let HTML = '';
        const count = this.data.account.length;
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].expense) {
                Object.assign(this.data.account[i], {expense: 0});
            }
            if (!this.data.account[i].income) {
                Object.assign(this.data.account[i], {income: 0});
            }
        HTML += `<div class="table-row">
            <div class="cell">${this.data.account[i].month}</div>
            <div class="cell">${this.data.months[i]}</div>
            <div class="cell">${this.data.account[i].income} Eur</div>
            <div class="cell">${this.data.account[i].expense}</div>
            <div class="cell">${this.data.account[i].income - this.data.account[i].expense} Eur</div>
        </div>`
        }
        DOM.innerHTML = HTML;
    }

    generateTotal() {
        const DOM2 = document.querySelector(this.selector2);
        const balance = this.sumIncome() - this.sumExpenses();
        const HTML = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${this.sumIncome()} Eur</div>
        <div class="cell">${this.sumExpenses()} Eur</div>
        <div class="cell">${balance} Eur</div>`;
        DOM2.innerHTML = HTML;
    }

    sumIncome() {
        let sumIncome = 0;
        const count = this.data.account.length;        
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].income) {
                Object.assign(this.data.account[i], {income: 0});
            }
            const monthIncome = this.data.account[i].income;
            sumIncome += monthIncome;
        }
        return sumIncome;
    }

    sumExpenses() {
        let sumExpenses = 0;
        const count = this.data.account.length;        
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].expense) {
                Object.assign(this.data.account[i], {expense: 0});
            }
            const monthExpenses = this.data.account[i].expense;
            sumExpenses += monthExpenses;
        }
        return sumExpenses;

    }
}

export { RenderBalance }