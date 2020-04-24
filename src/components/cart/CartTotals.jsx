import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PaypalButton from './PayPalButton'

const CartTotals = ({ value, history }) => {
    const { cartSubtotal, cartTax, cartTotal, clearCart, cart } = value

    const getShoppingcartITems = cart => {
        return {
            total: cartTotal.toFixed(2).toString(),
            subtotal: cartSubtotal.toFixed(2).toString(),
            tax: cartTax.toFixed(2),
            items: cart.map(products => {
                return {
                    sku: products.id.toString(),
                    name: products.name,
                    price: products.price.toFixed(2).toString(),
                    quantity: products.count,
                    currency: products.currency
                }
            })
        }
    }
    const order = getShoppingcartITems(cart)
    return (
        <React.Fragment>
            <Container>
                <Totals>
                    <Link to='/Products'>
                        <ClearCart onClick={clearCart}>Clear Cart</ClearCart>
                    </Link>
                    <Total><TotalText>subtotal :</TotalText> <strong>{cartSubtotal.toFixed(2)}</strong></Total>
                    <Total><TotalText>tax : </TotalText><strong>{cartTax}</strong></Total>
                    <Total><TotalText>total : </TotalText><strong>{cartTotal.toFixed(2)}</strong></Total>
                    <PaypalButton order={order} clearCart={clearCart} history={history} />
                </Totals>
            </Container>
        </React.Fragment>
    )
}
export default CartTotals



const Container = styled.div`
    max-width:960px;
    margin: 0 auto;
    padding:2rem 0;
    display:flex;
    justify-content:flex-end;
    @media (max-width: 1100px) {
        justify-content:center;
    }
   `
const ClearCart = styled.button`
    padding:0.30rem 0.5rem;
    border:1px solid red;
    border-radius:10%;
    color:#fff;
    background-color:red;
    font-size:1rem;
    &:hover{
        background-color:#fff;
        color:red;
        cursor: pointer;
    }
`
/* const CheckOut = styled.button`
    padding:0.75rem 1.75rem;
    background-color:#E0A400;
    font-weight: bold;
    color:#000;
    border-radius:10%;
    margin:1rem;
    &:hover{
        background-color:#bf8500;
        cursor: pointer;
    }
    @media (max-width: 500px) {
        font-size:0.60rem;
    }

` */

const Totals = styled.div`
     display:flex;
    flex-direction:column;
    align-items:center;
`


const Total = styled.h5`
    padding:0.75rem;
    font-size:1.3rem;
    color:#E0A400;
`

const TotalText = styled.span`
    font-style:italic;
    color:#fff;
    text-align:left;
`