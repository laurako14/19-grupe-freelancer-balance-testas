import { tableData } from "../data.js";

function sumIncome(tableData) {
    const count = 12;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        if (!tableData.account.income) {
            return 0;
        }
        sum += tableData.account.income[i];
    }
    return sum;
}

export { sumIncome }