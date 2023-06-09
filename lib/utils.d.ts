export declare const BASE_URL = "https://backend.flexpay.cd/api/rest/v1/paymentService";
export interface ConstructorParams {
    apiKey: string;
    webhookUrl: string;
    merchant: string;
}
export interface PaymentParams {
    phone: string;
    reference: string;
    amount: string;
    currency: string;
}
export interface PayApiResponse {
    code?: string;
    message: string;
    orderNumber?: string;
}
export declare class PayApiErrorResponse {
    readonly message: string;
    readonly orderNumber?: string;
    constructor(message: string, orderNumber?: string);
}
export interface PaymentResul {
    code: string;
    reference: string;
    amount: string;
    amountCustomer: string;
    phone: string;
    currency: string;
    createdAt: string;
    channel: string;
    orderNumber: string;
    provider_reference: string;
    isSuccessFull?: boolean;
}
