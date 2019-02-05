import {ItemDTO} from "../dto/item-dto";
import {CustomerDTO} from "../dto/customer-dto";
import {OrderDetailsDTO} from "../dto/orderdetails-dto";
import {OrdersDTO} from "../dto/orders-dto";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import Promise = require("promise");
import {ItemDAO} from "../dao/custom/item-dao";
import {OrderDetailsDAO} from "../dao/custom/orderdetails-dao";
import {CustomerDAO} from "../dao/custom/customer-dao";
import {OrdersDAO} from "../dao/custom/order-dao";
import {pool} from "../db/db-pool";

export class OrderDertailsBOImpl{

    findAllOrderDets(): Promise<Array<OrderDetailsDTO>>{

        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDetDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise = orderDetDAO.findAll();
                    promise.then(orderDets => {
                        resolve(orderDets);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    findOrderDet(orderId: string): Promise<Array<OrderDetailsDTO>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDetDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise = orderDetDAO.find(orderId);
                    promise.then(orderDets => {
                        resolve(orderDets);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    saveOrderDetails(orderDet: OrderDetailsDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDetDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise = orderDetDAO.save(orderDet);
                    promise.then(result => {
                        if (result==true){
                            console.log("sfadfadsfadsfasdfa");
                        }
                        console.log("dasfad")
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    updateOrderDetails(orderDet: OrderDetailsDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDetDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise = orderDetDAO.update(orderDet);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    deleteOrderDetail(orderId: string): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDetDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    const promise = orderDetDAO.delete(orderId);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    findAllOrders(): Promise<Array<OrdersDTO>>{

        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const ordersDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const promise = ordersDAO.findAll();
                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    findOrders(id: string): Promise<Array<OrdersDTO>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const ordersDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const promise = ordersDAO.find(id);
                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    saveOrders(orders: OrdersDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const ordersDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const promise = ordersDAO.save(orders);
                    promise.then(result => {
                        if (result==true){
                            console.log("sfadfadsfadsfasdfa");
                        }
                        console.log("dasfad")
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    updateOrders(orders: OrdersDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const ordersDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const promise = ordersDAO.update(orders);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    deleteOrders(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const ordersDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const promise = ordersDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }
}