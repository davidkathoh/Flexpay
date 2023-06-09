"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayApiErrorResponse = exports.BASE_URL = void 0;
exports.BASE_URL = "https://backend.flexpay.cd/api/rest/v1/paymentService";
class PayApiErrorResponse {
    constructor(message, orderNumber) {
        this.message = message;
        this.orderNumber = orderNumber;
    }
}
exports.PayApiErrorResponse = PayApiErrorResponse;
