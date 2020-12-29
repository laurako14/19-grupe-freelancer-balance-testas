import { RenderBalance } from "./renderBalance/RenderBalance.js";
import { tableData } from "./data.js";

new RenderBalance('.table-content', tableData, '.table-footer', '#minIncome', '#maxIncome', '#minExpenses', '#maxExpenses');