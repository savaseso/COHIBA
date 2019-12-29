import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartTotals = ({ value, history }) => {
    const { cartSubtotal, cartTax, cartTotal, clearCart, sendEmail } = value
    return (
        <React.Fragment>
            <Container>
                <Totals>
                    <Link to='/Products'>
                        <ClearCart onClick={clearCart}>Clear Cart</ClearCart>
                    </Link>
                    <Total><TotalText>subtotal :</TotalText> <strong>{cartSubtotal}</strong></Total>
                    <Total><TotalText>tax : </TotalText><strong>{cartTax}</strong></Total>
                    <Total><TotalText>total : </TotalText><strong>{cartTotal}</strong></Total>
                    <Link to="/Payment"><CheckOut onClick={sendEmail}>Checkout</CheckOut></Link>
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
    padding:0.50rem 0.75rem;
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
const CheckOut = styled.button`
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

`

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