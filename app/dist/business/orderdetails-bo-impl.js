"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var db_pool_1 = require("../db/db-pool");
var OrderDertailsBOImpl = /** @class */ (function () {
    function OrderDertailsBOImpl() {
    }
    OrderDertailsBOImpl.prototype.orderTransaction = function (customer, orders, orderDetails, item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var itemDAO_1 = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var orderDAO_1 = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var orderDetailsDAO_1 = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
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
                    var promise = customerDAO.save(customer);
                    promise.then(function (result) {
                        if (result == true) {
                            var promise1 = orderDAO_1.save(orders);
                            promise1.then(function (result) {
                                if (result == true) {
                                    var promise2 = orderDetailsDAO_1.save(orderDetails);
                                    promise2.then(function (result) {
                                        if (result == true) {
                                            var promise3 = itemDAO_1.save(item);
                                            promise3.then(function (result) {
                                                resolve(result);
                                                db_pool_1.pool.releaseConnection(connection);
                                            }).catch(function (error) {
                                                reject(error);
                                                db_pool_1.pool.releaseConnection(connection);
                                            });
                                        }
                                        db_pool_1.pool.releaseConnection(connection);
                                    }).catch(function (error) {
                                        reject(error);
                                        db_pool_1.pool.releaseConnection(connection);
                                    });
                                }
                                db_pool_1.pool.releaseConnection(connection);
                            }).catch(function (error) {
                                reject(error);
                                db_pool_1.pool.releaseConnection(connection);
                            });
                        }
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return OrderDertailsBOImpl;
}());
exports.OrderDertailsBOImpl = OrderDertailsBOImpl;
