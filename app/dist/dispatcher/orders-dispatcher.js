"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var orderdetails_bo_impl_1 = require("../business/orderdetails-bo-impl");
var ordersDispatcher = express.Router();
ordersDispatcher.route("")
    .get(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().findAllOrders();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().saveOrders(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
ordersDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().findOrders(req.params.id);
    promise.then(function (orders) {
        if (orders.length > 0) {
            res.status(200).send(orders[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().deleteOrders(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched Order ID");
        return;
    }
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().updateOrders(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = ordersDispatcher;
