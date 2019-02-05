"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetailsDTO = /** @class */ (function () {
    function OrderDetailsDTO(orderId, itemCode, qty, total) {
        this.orderId = orderId;
        this.itemCode = itemCode;
        this.qty = qty;
        this.total = total;
    }
    return OrderDetailsDTO;
}());
exports.OrderDetailsDTO = OrderDetailsDTO;
