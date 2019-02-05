"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var customer_dispatcher_1 = __importDefault(require("./customer-dispatcher"));
var item_dispatcher_1 = __importDefault(require("./item-dispatcher"));
var orderdetails_dispatcher_1 = __importDefault(require("./orderdetails-dispatcher"));
var orders_dispatcher_1 = __importDefault(require("./orders-dispatcher"));
var mainDespatcher = express.Router();
mainDespatcher.use(express.json());
mainDespatcher.use(cors());
mainDespatcher.use('/api/v1/customers', customer_dispatcher_1.default);
mainDespatcher.use('/api/v1/items', item_dispatcher_1.default);
mainDespatcher.use('/api/v1/orderDets', orderdetails_dispatcher_1.default);
mainDespatcher.use('/api/v1/orders', orders_dispatcher_1.default);
exports.default = mainDespatcher;
