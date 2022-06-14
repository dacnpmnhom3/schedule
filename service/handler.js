const sellerRepo = require("../infrastructure/seller.repo");
const sellerLogRepo = require("../infrastructure/sellerLog.repo");
const EmailHelper = require("../helper/email/EmailHelper");

const emailHelper = new EmailHelper();
const util = require("../helper/util");

const createSeller = async (sellerLog) => {
  //check rules if a phone number we have only one seller with this phone number

  //send mail to verify
  // const code = util.makeCode();

  // const mailOptions = {
  //   from: "Shop",
  //   to: sellerLog.data.email,
  //   subject: "Verify your account",
  //   content: {
  //     link: "http://localhost:3000/verify" + code,
  //   },
  // };

  // await emailHelper.sendRegisterSeller(mailOptions);

  return {
    id: sellerLog.idEvent,
    phone: sellerLog.data.phone,
    fullName: sellerLog.data.fullName,
    email: sellerLog.data.email,
    password: sellerLog.data.password,
    isVerified: false,
  };
};

const updateSeller = (sellerLog, previousSellerLog) => {
  return {
    id: sellerLog.idEvent,
    phone: sellerLog.data.phone,
    fullName: sellerLog.data.fullName,
    email: sellerLog.data.email,
    password: sellerLog.data.password,
    address: sellerLog.data.address,
  };
};

const deleteSeller = (sellerLog) => {
  return "Seller deleted";
};

const forgetPassword = async (sellerLog) => {
  //send reset email
};

module.exports = { createSeller, updateSeller, deleteSeller, forgetPassword };
