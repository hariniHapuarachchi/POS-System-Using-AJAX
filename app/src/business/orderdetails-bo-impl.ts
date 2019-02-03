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

    orderTransaction(customer:CustomerDTO,orders:OrdersDTO,orderDetails:OrderDetailsDTO,item:ItemDTO):Promise<boolean>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const customerDAO = <CustomerDAO> getDAO(DAOTypes.CUSTOMER, connection);
                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);
                    const orderDAO = <OrdersDAO> getDAO(DAOTypes.ORDERS, connection);
                    const orderDetailsDAO = <OrderDetailsDAO> getDAO(DAOTypes.ORDERDETAILS, connection);
                    // connection.beginTransaction(function (err) {
                    //     if (err) { throw err; }
                    //     const promise = customerDAO.save(customer);
                    //     promise.then(result => {
                    //         pool.releaseConnection(connection);
                    //     }).catch(error=>{
                    //         return connection.rollback(function () {
                    //             reject(error);
                    //             pool.releaseConnection(connection);
                    //         })
                    //     });
                    // });
                    // const promise = customerDAO.save(customer);
                    // const promise1 = itemDAO.save(item);
                    // const promise2 = orderDAO.save(orders);
                    // const promise3 = orderDetailsDAO.save(orderDetails);
                    // promise.then(result => {
                    //     pool.releaseConnection(connection);
                    // }).catch(error=>{
                    //     reject(error);
                    //     pool.releaseConnection(connection);
                    // });
                    const promise = customerDAO.save(customer);
                    promise.then(result => {
                        if (result==true){
                            const promise1 = orderDAO.save(orders);
                            promise1.then(result => {
                                if (result==true){
                                    const promise2 = orderDetailsDAO.save(orderDetails);
                                    promise2.then(result => {
                                        if (result==true){
                                            const promise3 = itemDAO.save(item);
                                            promise3.then(result => {
                                                resolve(result);
                                                pool.releaseConnection(connection);
                                            }).catch(error=>{
                                                reject(error);
                                                pool.releaseConnection(connection);
                                            });
                                        }
                                        pool.releaseConnection(connection);
                                    }).catch(error=>{
                                        reject(error);
                                        pool.releaseConnection(connection);
                                    });
                                }
                                pool.releaseConnection(connection);
                            }).catch(error=>{
                                reject(error);
                                pool.releaseConnection(connection);
                            });
                        }
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