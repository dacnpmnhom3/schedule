const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const { v4: uuidv4 } = require("uuid");

class Seller extends Model {}

Seller.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      default: "",
    },
    fullName: {
      type: DataTypes.STRING,
      default: "",
    },
    phone: {
      type: DataTypes.STRING,
      default: "",
    },
    password: {
      type: DataTypes.STRING,
      default: "",
    },
    idCardNumber: {
      type: DataTypes.STRING,
      default: "",
    },
    taxCode: {
      type: DataTypes.STRING,
      default: "",
    },
    address: {
      type: DataTypes.STRING,
      default: "",
    },
    frontIdCardImage: {
      type: DataTypes.STRING,
      default: "",
    },
    backIdCardImage: {
      type: DataTypes.STRING,
      default: "",
    },
    portrait: {
      type: DataTypes.STRING,
      default: "",
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    code: {
      type: DataTypes.STRING,
      default: "",
    },
  },
  {
    sequelize,
    modelName: "seller",
    paranoid: true,
  }
);

module.exports = Seller;
