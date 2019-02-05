"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var orderdetails_bo_impl_1 = require("../business/orderdetails-bo-impl");
var orderDetailsDispatcher = express.Router();
orderDetailsDispatcher.route("")
    .get(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().findAllOrderDets();
    promise.then(function (orderDets) {
        res.status(200).json(orderDets);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("orderId" in req.body && "itemCode" in req.body && "qty" in req.body && "total" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().saveOrderDetails(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
orderDetailsDispatcher.route("/:orderId")
    .get(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().findOrderDet(req.params.orderId);
    promise.then(function (orderDets) {
        if (orderDets.length > 0) {
            res.status(200).send(orderDets[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().deleteOrderDetail(req.params.orderId);
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
    if (!("orderId" in req.body && "itemCode" in req.body && "qty" in req.body && "total" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.orderId !== req.params.orderId) {
        res.status(400).send("Mismatched Order ID");
        return;
    }
    var promise = new orderdetails_bo_impl_1.OrderDertailsBOImpl().updateOrderDetails(req.body);
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
exports.default = orderDetailsDispatcher;
