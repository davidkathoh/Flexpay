import { ConstructorParams, PayApiResponse, PaymentParams, PaymentResul } from "./utils";
export declare class Flexpay {
    private apiKey;
    private webhookUrl;
    private merchant;
    constructor({ webhookUrl, apiKey, merchant }: ConstructorParams);
    pay({ amount, currency, phone, reference }: PaymentParams): Promise<PayApiResponse>;
    static parse(data: any): PaymentResul;
}
