const axios = require("axios");

const axiosClient = axios.create({
  baseURL: process.env.URL_WEB_BACK_END,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});

module.exports = axiosClient;
