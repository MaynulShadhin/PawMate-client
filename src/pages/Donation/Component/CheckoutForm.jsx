import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const [error, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex items-center w-full justify-center">
                    <button className="font-medium bg-[#F07C3D] text-white mt-8 px-3 py-1 rounded-sm" type="submit" disabled={!stripe}>
                        Donate
                    </button>
                </div>
                <p className="text-red-600 mt-2">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;