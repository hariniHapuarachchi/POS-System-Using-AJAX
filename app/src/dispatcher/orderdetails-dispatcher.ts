import express = require("express");
import {OrderDertailsBOImpl} from "../business/orderdetails-bo-impl";
import corse = require("cors");
import {CustomerBoImpl} from "../business/customer-bo-impl";

const orderDetailsDispatcher = express.Router();

orderDetailsDispatcher.route("")
    .get((req, res) => {

        const promise = new OrderDertailsBOImpl().findAllOrderDets();
        promise.then(orderDets=>{
            res.status(200).json(orderDets);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("orderId" in req.body && "itemCode" in req.body && "qty" in req.body && "total" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new OrderDertailsBOImpl().saveOrderDetails(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })

orderDetailsDispatcher.route("/:orderId")
    .get((req, res) => {

        const promise = new OrderDertailsBOImpl().findOrderDet(req.params.orderId);
        promise.then(orderDets=>{

            if (orderDets.length > 0){
                res.status(200).send(orderDets[0]);
            }else{
                res.sendStatus(404);
            }
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new OrderDertailsBOImpl().deleteOrderDetail(req.params.orderId);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .put((req, res) => {

        if (!("orderId" in req.body && "itemCode" in req.body && "qty" in req.body && "total" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.orderId !== req.params.orderId){
            res.status(400).send("Mismatched Order ID");
            return;
        }

        const promise = new OrderDertailsBOImpl().updateOrderDetails(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    });


export default orderDetailsDispatcher;