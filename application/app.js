// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
require("dotenv").config();
const db = require("../config/db.config");
require("../config/all.table");
db.sync().then(console.log("Syncing Database Done!"));
const schedule = require("node-schedule");
const sellerService = require("../service/seller.service");
//run every one minute
var rule = new schedule.RecurrenceRule();
rule.second = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const job = schedule.scheduleJob(rule, async () => {
  console.log("Running job");
  await sellerService.runTask();
  console.log("Job finished");
});
