"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetails = /** @class */ (function () {
    function OrderDetails(orderId, itemCode, qty, total) {
        this.orderId = orderId;
        this.itemCode = itemCode;
        this.qty = qty;
        this.total = total;
    }
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
