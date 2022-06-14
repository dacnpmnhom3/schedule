const SellerLog = require("./SellerLog");

const getAllIsRunFalse = async () => {
  try {
    // order by time asc
    return await SellerLog.findAll({
      where: {
        isRun: false,
      },
      raw: true,
      order: [["timeStamp", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllByIdEvent = async (idEvent) => {
  try {
    return await SellerLog.findAll({
      where: {
        idEvent,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateIsRunTrue = async (stt) => {
  // console.log({ stt });
  try {
    return await SellerLog.update(
      { isRun: true },
      {
        where: {
          stt: stt,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllIsRunFalse, getAllByIdEvent, updateIsRunTrue };
