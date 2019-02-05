import express = require("express");
import {OrderDertailsBOImpl} from "../business/orderdetails-bo-impl";
import corse = require("cors");
import {CustomerBoImpl} from "../business/customer-bo-impl";

const ordersDispatcher = express.Router();

ordersDispatcher.route("")
    .get((req, res) => {

        const promise = new OrderDertailsBOImpl().findAllOrders();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("id" in req.body && "date" in req.body && "customerId" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new OrderDertailsBOImpl().saveOrders(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })

ordersDispatcher.route("/:id")
    .get((req, res) => {

        const promise = new OrderDertailsBOImpl().findOrders(req.params.id);
        promise.then(orders=>{

            if (orders.length > 0){
                res.status(200).send(orders[0]);
            }else{
                res.sendStatus(404);
            }
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new OrderDertailsBOImpl().deleteOrders(req.params.id);
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

        if (!("id" in req.body && "date" in req.body && "customerId" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id){
            res.status(400).send("Mismatched Order ID");
            return;
        }

        const promise = new OrderDertailsBOImpl().updateOrders(req.body);
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


export default ordersDispatcher;