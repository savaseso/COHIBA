import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';


const PaypalCheckoutButton = ({ order, clearCart, history }) => {

  const paypalConf = {
    currency: 'USD',
    env: 'production',
    client: {
      sandbox: '',
      production: process.env.REACT_APP_PAYPAL_ID,
    },
    style: {
      label: 'pay',
      size: 'medium', // small | medium | large | responsive
      shape: 'rect',   // pill | rect
      color: 'gold',  // gold | blue | silver | black
    },
  };

  const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: order.total,
            currency: paypalConf.currency,
            details: {
                subtotal: order.subtotal,
                 tax: order.tax,
                 shipping: order.shipping
                
              }
          },    
          item_list: {
            items: order.items
          },
        },
      ],
      note_to_payer: "Contact us for any questions on your order.",
    };

    return actions.payment.create({
      payment,
    });
  };

  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
      .then(response => {
        clearCart();
        history.push('/');
        alert(`The payment was succeeded! ID: ${response.id}`)
      })
      .catch(error => {
	      alert('An authorization error occured!');
      });
  };

  const onError = (error) => {
    alert ('Error happened' );
  };

  const onCancel = (data, actions) => {
    alert( 'Payment cancellation' );
  };


  return (
    <PayPalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
    />

  );
}

export default PaypalCheckoutButton;