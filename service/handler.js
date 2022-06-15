const sellerRepo = require("../infrastructure/seller.repo");
const sellerLogRepo = require("../infrastructure/sellerLog.repo");
const EmailHelper = require("../helper/email/EmailHelper");
const axiosClient = require("./axiosClient");

const emailHelper = new EmailHelper();
const util = require("../helper/util");

const createSeller = async (sellerLog) => {
  //Call API to create store for seller
  const result = await axiosClient.post("/api/store", {
    store_name: sellerLog.data.fullName,
    store_owner_id: sellerLog.idEvent,
  });
  console.log(result);

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
