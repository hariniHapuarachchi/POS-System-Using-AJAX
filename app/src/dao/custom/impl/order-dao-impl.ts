import Promise = require("promise");
import {Orders} from "../../../entity/orders";
import {PoolConnection} from "mysql";
import {OrdersDAO} from "../order-dao";


export class OrderDAOImpl implements OrdersDAO {

    constructor(private connection: PoolConnection) {}

    delete(id: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM orders WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(id: string): Promise<Array<Orders>> {

        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM orders WHERE id='${id}'`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
        });
    }

    findAll(): Promise<Array<Orders>> {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM orders`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
        });
    }

    save(entity: Orders): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(
                `INSERT INTO orders VALUES ('${entity.id}','${entity.date}','${entity.customerId}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Orders): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE orders SET date = '${entity.date}', customerId ='${entity.customerId}' WHERE id='${entity.id}'`,
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