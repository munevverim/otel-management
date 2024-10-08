import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

// Stripe Publishable Key'i (Statik modda kullanılmayacak)
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); 

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Ödeme işlemi simüle ediliyor
    if (amount > 0) {
      setPaymentSuccess('Ödeme başarıyla gerçekleştirildi!');
      console.log(`Ödenen miktar: ${amount} USD`);
    } else {
      console.error('Ödeme hatası: Geçerli bir ödeme miktarı girin.');
    }
  };

  return (
    <div>
      <h3>Otel Rezervasyonu Ödeme</h3>
      <form onSubmit={handlePayment}>
        {/* Stripe'in CardElement bileşeni */}
        <CardElement />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ödeme Miktarı"
        />
        <button type="submit" disabled={!stripe}>Ödeme Yap</button>
      </form>
      {paymentSuccess && <p>{paymentSuccess}</p>}
    </div>
  );
};

// Stripe'i sarmalıyoruz (Statik modda backend'e bağlanmayacak)
const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripePayment;
