const sellerRepo = require("../infrastructure/seller.repo");
const sellerLogRepo = require("../infrastructure/sellerLog.repo");
const eventConst = require("./event.const");
const handler = require("./handler");

const runTask = async () => {
  const sellerLogs = await sellerLogRepo.getAllIsRunFalse();

  groupedSellerLogs = groupByEventId(sellerLogs);

  for (const idEvent in groupedSellerLogs) {
    const sellerLogs = groupedSellerLogs[idEvent];
    await runTaskByIdEvent(sellerLogs);
  }
};

const runTaskByIdEvent = async (sellerLogs) => {
  let result = null;
  result = await deserilizeSeller(sellerLogs);

  const firstSellerLog = sellerLogs[0];
  if (firstSellerLog.name == eventConst.CREATE_SELLER) {
    await sellerRepo.create(result);
    console.log("update seller");
  } else {
    await sellerRepo.update(result);
    console.log("create seller");
  }
};

const groupByEventId = (sellerLogs) => {
  const sellerLogsGrouped = {};
  sellerLogs.forEach((sellerLog) => {
    if (!sellerLogsGrouped[sellerLog.idEvent]) {
      sellerLogsGrouped[sellerLog.idEvent] = [];
    }
    sellerLogsGrouped[sellerLog.idEvent].push(sellerLog);
  });
  return sellerLogsGrouped;
};
module.exports = { runTask };
async function deserilizeSeller(sellerLogs) {
  const firstSellerLog = sellerLogs[0];
  let result = null;
  if (firstSellerLog.name != eventConst.CREATE_SELLER) {
    console.log("not CREATE_SELLER");
    result = await sellerRepo.getById(firstSellerLog.idEvent);
  }

  //Desiralize Data
  for (const sellerLog of sellerLogs) {
    sellerLog.data = JSON.parse(sellerLog.data);
    if (sellerLog.name == eventConst.CREATE_SELLER) {
      result = await handler.createSeller(sellerLog);
      console.log("SELLER_CREATE");
    } else if (sellerLog.name == eventConst.UPDATE_SELLER) {
      result = handler.updateSeller(sellerLog, result);
      console.log("SELLER_UPDATE");
    } else if (sellerLog.name == eventConst.DELETE_SELLER) {
      await sellerRepo.deleteById(sellerLog.stt);
      console.log("SELLER_DELETE");
    } else if (sellerLog.name == eventConst.FORGET_PASSWORD_SELLER) {
      await handler.forgetPassword(sellerLog);
      console.log("FORGET PASSWORD");
    }

    await sellerLogRepo.updateIsRunTrue(sellerLog.stt);
    console.log("SELLER_LOG_UPDATE");
  }
  return result;
}
