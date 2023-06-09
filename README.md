# Flexpay

Flexpay is an npm package that provides a convenient way to handle payments using various mobile money platforms such as Airtel Money, Orange Money, Afrimoney, and M-Pesa. It works with [](flexpay.cd), A mobile money payment aggregator in the Republic Democratic of Congo.

## Installation

You can install Flexpay via npm by running the following command:

```shell
npm install flexpay
```
## Usage
To use Flexpay in your TypeScript project, follow these steps:
1. Import the necessary classes and types:
```typescript
import { Flexpay} from "flexpay";

```
2. Create an instance of the Flexpay class by providing the required parameters:
```typescript
const flexpay = new Flexpay({
  webhookUrl: "YOUR_WEBHOOK_URL",
  apiKey: "YOUR_API_KEY",
  merchant: "YOUR_MERCHANT_ID",
});

```
3. Make a payment request using the pay method, passing in the required payment parameters:
```typescript
try{
flexpay.pay({
  amount: "amount",
  currency: "USD",
  phone: "PHONE_NUMBER",
  reference: "PAYMENT_REFERENCE",
})
}catch(e){
}

```
- amount (string): The payment amount.
- currency (string): The currency of the payment it can either be USD or CDF for congolese francs.
- phone (string): The customer's mobile money number. It must be in the format 2439XXXXXXX
- reference (string): A reference for the payment.

### Parsing the webhook result
When the payment process result is recieved on the webhook url provided, it can be parsed and return a PaymentResult object.
```typescript
const paymentResult = Flexpay.parse(request.body);

console.log("Payment:", paymentResult.isSuccessFull);


```
## Reach out:
- Follow me on Twitter: [@davidkathoh](https://twitter.com/davidkathoh)
- Send me an email: [hello@davidkathoh.com](mailto:hello@davidkathoh.com)
