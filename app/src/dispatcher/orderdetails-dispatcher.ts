import express = require("express");
import {OrderDertailsBOImpl} from "../business/orderdetails-bo-impl";

const orderDetailsDispatcher = express.Router();

orderDetailsDispatcher.route("")
    .post((req, res) => {
        console.log(req.body[0]);
        const promise = new OrderDertailsBOImpl().orderTransaction(req.body[0],req.body[1],req.body[2],req.body[3]);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });
export default orderDetailsDispatcher;