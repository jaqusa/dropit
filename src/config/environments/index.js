require("dotenv").config();

const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const { NODE_ENV } = process.env;
let environment = DEVELOPMENT;

if (NODE_ENV === "production") {
  environment = PRODUCTION;
}

module.exports = environment;
