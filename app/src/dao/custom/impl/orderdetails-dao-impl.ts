import Promise = require("promise");
import {PoolConnection} from "mysql";
import {OrderDetails} from "../../../entity/orderdetails";
import {OrderDetailsDAO} from "../orderdetails-dao";


export class OrderDetailsDAOImpl implements OrderDetailsDAO {

    constructor(private connection: PoolConnection) {}

    delete(orderId: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM orderdetail WHERE orderId='${orderId}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(orderId: string): Promise<Array<OrderDetails>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orderdetail WHERE orderId='${orderId}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<OrderDetails>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orderdetail`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: OrderDetails): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(
                `INSERT INTO orderdetail VALUES ('${entity.orderId}','${entity.itemCode}','${entity.qty}','${entity.unitPrice}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: OrderDetails): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE orderdetail SET itemCode = '${entity.itemCode}', qty ='${entity.qty}', unitPrice ='${entity.unitPrice}' WHERE orderId='${entity.orderId}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

}