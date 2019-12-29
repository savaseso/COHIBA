import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'

const EmptyCart = () => {
    return(
        <div>
            <Layout>
                <Container>
                    <h1>Your cart is currently empty</h1>
                </Container>
            </Layout>
        </div>
    )
}
export default EmptyCart


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:600px;
    background-color:#0f0f0f;
    color:#fff;
    font-style:italic;
`