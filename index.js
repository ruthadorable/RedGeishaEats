const express = require ("express");
const Stripe = require('stripe')
const stripe = 
const app = express()
const cors= require('cors')
app.use(express.json())
app.use(cors())
const port = 3000;
const host="192.0.0.5";
app.listen(port,
    ()=> {
        console.log(`Server is running at ${port}`)
    }
)
app.post("/payment-sheet", async (req,res,next)=> {

    try{
        const data =req.body;
        const params= {
            email: data.email,
            name: data.name
        }
        const customer= await stripe.customers?.create(params);
        console.log(customer.id);
        const ephemeralKey= await stripe.ephemeralKey?.create(
            {customer: customer.id},
            {apiVersion: '2024-06-20'}
        );
        const paymentIntent= await stripe.paymentIntents?.create({
            amount: data.amount,
            currency: data.currency,
            customer: customer.id,
            automatic_payment_methods: {
                enabled : true
            },
        });
        const response = {
            paymentIntent : paymentIntent?.client_secret,
            ephemeralKey: ephemeralKey?.secret,
            customer: customer?.id,
        }
        res.status(200).send(response)
    }catch(e) {
        next(e)
    }
    
} )

