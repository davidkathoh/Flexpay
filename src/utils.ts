export const BASE_URL_PAY = "https://backend.flexpay.cd/api/rest/v1/paymentService"
export const BASE_URL_CHECK = "https://backend.flexpay.cd/api/rest/v1/check/"
export interface ConstructorParams {
    apiKey:string,
    webhookUrl:string,
    merchant:string
}
export interface PaymentParams {
    phone:string,
    reference: string,
    amount:string,
    currency:string
}

export interface PayApiResponse {
    code?: string;
    message: string;
    orderNumber?: string;
}
export class ApiErrorResponse {

    readonly message: string;
    readonly orderNumber?: string;
    public constructor(message:string, orderNumber?:string) {
        this.message = message;
        this.orderNumber = orderNumber;
    }
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
    isSuccessFull?:boolean
}

export interface TransactionCheck {
    code: string;
    message: string;
    transaction: {
        reference: string;
        amount: string;
        amountCustomer: string;
        currency: string;
        createdAt: string;
        status: string;
        channel: string;
    };
}



