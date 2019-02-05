"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var db_pool_1 = require("../db/db-pool");
var OrderDertailsBOImpl = /** @class */ (function () {
    function OrderDertailsBOImpl() {
    }
    OrderDertailsBOImpl.prototype.findAllOrderDets = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetDAO.findAll();
                    promise.then(function (orderDets) {
                        resolve(orderDets);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.findOrderDet = function (orderId) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetDAO.find(orderId);
                    promise.then(function (orderDets) {
                        resolve(orderDets);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.saveOrderDetails = function (orderDet) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetDAO.save(orderDet);
                    promise.then(function (result) {
                        if (result == true) {
                            console.log("sfadfadsfadsfasdfa");
                        }
                        console.log("dasfad");
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.updateOrderDetails = function (orderDet) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetDAO.update(orderDet);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.deleteOrderDetail = function (orderId) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                    var promise = orderDetDAO.delete(orderId);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.findAllOrders = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ordersDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var promise = ordersDAO.findAll();
                    promise.then(function (orders) {
                        resolve(orders);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.findOrders = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ordersDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var promise = ordersDAO.find(id);
                    promise.then(function (orders) {
                        resolve(orders);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.saveOrders = function (orders) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ordersDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var promise = ordersDAO.save(orders);
                    promise.then(function (result) {
                        if (result == true) {
                            console.log("sfadfadsfadsfasdfa");
                        }
                        console.log("dasfad");
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.updateOrders = function (orders) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ordersDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var promise = ordersDAO.update(orders);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderDertailsBOImpl.prototype.deleteOrders = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ordersDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERS, connection);
                    var promise = ordersDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
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
