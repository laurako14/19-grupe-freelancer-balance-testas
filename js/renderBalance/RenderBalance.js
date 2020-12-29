class RenderBalance {
    constructor(selector, data, selector2, selector3, selector4, selector5, selector6) {
        this.selector = selector;
        this.selector2 = selector2;
        this.selector3 = selector3;
        this.selector4 = selector4;
        this.selector5 = selector5;
        this.selector6 = selector6;
        this.data = data;

        this.init();
    }

    init() {
        this.generateItems();
        this.generateTotal();
        this.renderSummary();
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

    leastIncome() {
        let income = Infinity;
        const count = this.data.account.length;
        let month = 0;
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].income) {
                Object.assign(this.data.account[i], {income: 0});
            }
            if (this.data.account[i].income < income && this.data.account[i].income !== 0) {
                income = this.data.account[i].income;
                month = i;
            } else {
                continue;
            }
        }
        return month;
    }

    renderSummary() {
        const DOM3 = document.querySelector(this.selector3);
        DOM3.innerHTML = `${this.data.months[this.leastIncome()]}`;
        const DOM4 = document.querySelector(this.selector4);
        DOM4.innerHTML = `${this.data.months[this.mostIncome()]}`;
        const DOM5 = document.querySelector(this.selector5);
        DOM5.innerHTML = `${this.data.months[this.leastExpenses()]}`;
        const DOM6 = document.querySelector(this.selector6);
        DOM6.innerHTML = `${this.data.months[this.mostExpenses()]}`;
    }

    mostIncome() {
        let income = -Infinity;
        const count = this.data.account.length;
        let month = 0;
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].income) {
                Object.assign(this.data.account[i], {income: 0});
            }
            if (this.data.account[i].income > income) {
                income = this.data.account[i].income;
                month = i;
            } else {
                continue;
            }
        }
        return month;
    }

    leastExpenses() {
        let expenses = Infinity;
        const count = this.data.account.length;
        let month = 0;
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].expense) {
                Object.assign(this.data.account[i], {expense: 0});
            }
            if (this.data.account[i].expense < expenses && this.data.account[i].expense !== 0) {
                expenses = this.data.account[i].expense;
                month = i;
            } else {
                continue;
            }
        }
        return month;
    }

    mostExpenses() {
        let expenses = -Infinity;
        const count = this.data.account.length;
        let month = 0;
        for (let i = 0; i < count; i++) {
            if (!this.data.account[i].expense) {
                Object.assign(this.data.account[i], {expense: 0});
            }
            if (this.data.account[i].expense > expenses) {
                expenses = this.data.account[i].expense;
                month = i;
            } else {
                continue;
            }
        }
        return month;
    }

}

export { RenderBalance }