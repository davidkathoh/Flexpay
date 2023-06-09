import {BASE_URL, ConstructorParams, PayApiErrorResponse, PayApiResponse, PaymentParams, PaymentResul} from "./utils";
import axios from "axios";

export class Flexpay {

    private apiKey:string;
    private webhookUrl:string;
    private merchant:string
    public constructor({webhookUrl,apiKey,merchant}:ConstructorParams) {
        this.apiKey = apiKey;
        this.merchant = merchant;
        this.webhookUrl = webhookUrl
    }

     public async  pay({amount,currency,phone,reference}:PaymentParams):Promise<PayApiResponse>{
        return new Promise( (resolve, reject)=>{
            axios.post(BASE_URL,{
                "merchant": this.merchant,
                "type": "1",
                "phone": phone,
                "reference": reference,
                "amount": amount,
                "currency": currency,
                "callbackUrl":this.webhookUrl,
            },{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${this.apiKey}`,
                },
            }).then((response)=>{
                let responseBody = response.data;
                if (responseBody.code === '0') {
                    console.log("api success");
                    resolve(responseBody);
                } else {
                    reject(new PayApiErrorResponse(responseBody.message,responseBody.orderNumber));
                }
            }).catch((error)=>{
                    reject(new PayApiErrorResponse(error.message))
            })
        })

    }
    public static parse(data:any){
        let response:PaymentResul = JSON.parse(data);
        response.isSuccessFull = response.code === "0";
        return  response
    }
}