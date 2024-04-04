const mongoose = require("mongoose");
const { NODE_ENV, ALTAS_DB_URL } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ALTAS_DB_URL);
    }
  } catch (error) {
    console.log("Unable to connect to db server");
    console.log(error);
  }
}

module.exports = connectToDB;
