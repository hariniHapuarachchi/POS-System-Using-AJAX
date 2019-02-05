import express = require("express");
import cors = require("cors");

import customerDispatcher from "./customer-dispatcher";
import itemDispatcher from "./item-dispatcher";
import orderDetailsDispatcher from "./orderdetails-dispatcher";
import ordersDispatcher from "./orders-dispatcher";

const mainDespatcher = express.Router();
mainDespatcher.use(express.json());
mainDespatcher.use(cors());

mainDespatcher.use('/api/v1/customers',customerDispatcher);
mainDespatcher.use('/api/v1/items',itemDispatcher);
mainDespatcher.use('/api/v1/orderDets',orderDetailsDispatcher);
mainDespatcher.use('/api/v1/orders',ordersDispatcher);
export default mainDespatcher;
