import React from 'react';
import { Consumer } from '../../context'
import styled from 'styled-components'
import CartColumns from './CartColumns'
import Layout from '../Layout';
import CartList from './CartList';
import EmptyCart from './EmptyCart'
import CartTotals from './CartTotals'


const Cart = (props) => {
        return (
            <section>
                <Consumer>
                    {value => {
                        const { cart } = value
                        if (cart.length > 0) {
                            return (
                               <>
                                <Layout>
                                    <Container>
                                        <Heading>Your Cart</Heading>
                                        <CartColumns />
                                        <CartList value={value} />
                                        <CartTotals value={value} history={props.history} />
                                    </Container>
                                </Layout>
                               </>
                              )
                        } else {
                            setTimeout(() => props.history.push('/'), 2300)
                            return <EmptyCart />
                        }
                    }}
                </Consumer>
            </section>
        )
    }

export default Cart


const Container = styled.div`
    background-color:#0f0f0f;
`

const Heading = styled.h1`
    text-align:center;
    color:#E0A400;
    padding:4rem 0 2rem 0;
`