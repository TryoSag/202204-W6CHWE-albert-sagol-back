require("dotenv").config();
const connectDB = require("./db");
const { initializeServer } = require("./server");

(async () => {
  await connectDB();
  initializeServer(4000);
})();
