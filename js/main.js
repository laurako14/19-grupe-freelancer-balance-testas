import { tableData } from "./data.js";
import { generateItems } from "./renderBalance/generateItems.js";
import { total } from "./total/total.js";

generateItems('.table-content', tableData);
total('.table-footer', tableData);