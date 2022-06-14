const Seller = require("./Seller");

const getById = async (id) => {
  try {
    return await Seller.findOne({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const create = async (seller) => {
  try {
    return await Seller.create(seller);
  } catch (error) {
    console.log(error);
  }
};

const update = async (seller) => {
  try {
    return await Seller.update(seller, {
      where: {
        id: seller.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getById, create, update };
