import React, { Component } from 'react';
import Layout from './Layout'
import Picture from '../assets/img/Panza_cuba.jpg'
import CurrentProducts from '../assets/data/productList.json'
import { Consumer } from '../context'
import styled from 'styled-components'

class Vintages extends Component {
    render() {
        return (
            <Consumer>{value => {
                return (
                    <>
                        <Layout>
                            <BackGround>
                                <ContentWrapper>
                                    <Wrapper>
                                        <Heading>Vintage from 2009</Heading>
                                        <Table>
                                            <thead>
                                                <FirstRow>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                </FirstRow>
                                            </thead>
                                            <tbody>
                                                {CurrentProducts.vintages.map(vintage =>
                                                    <TableRow key={vintage.id} onClick={() => {
                                                        value.addToCart(vintage.id)
                                                        value.openModal(vintage.id)
                                                    }}>
                                                        <Name>{vintage.name}</Name>
                                                        <Price>${vintage.price}</Price>
                                                    </TableRow>
                                                )}
                                            </tbody>
                                        </Table>
                                    </Wrapper>
                                </ContentWrapper>
                            </BackGround>
                        </Layout>
                    </>
                )
            }}
            </Consumer>
        )
    }
}
export default Vintages



const BackGround = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${Picture}); 
    background-position: center; 
    background-size: cover; 
    height:auto;
    display:flex;
    justify-content:center;
    padding:2rem;
`






const Heading = styled.h1`
    text-align: center;
    color:#fff;
    font-size:2rem;
    @media (max-width: 625px) {
        font-size:1.2rem;
    }
    @media (max-width: 450px) {
        font-size:0.75rem;
    }
 `

const ContentWrapper = styled.div`
        width:700px;
        height:auto;
        background-color:#333;
        opacity:0.8;
        text-align:justify;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
`
const Table = styled.table`
    padding:10px;
    @media (max-width: 625px) {
        font-size:80%;
    }
    @media (max-width: 500px) {
        font-size:65%;
    }
    @media (max-width: 400px) {
        font-size:60%;
    }
`
const FirstRow = styled.tr`
    color:#fff;
    opacity:0.6;
    
`
const TableRow = styled.tr`
    cursor: pointer;
`
const Name = styled.th`
    color:#E0A400;
    padding-top:10px;
    opacity:0.8;
    padding:10px;
    &:hover{
        opacity:1;
    }

`

const Price = styled.th`
    text-align:center;
    color:#E0A400;
    padding-right:10px;
`
const Wrapper = styled.div`
    display:flex; 
    justify-content:center;
    flex-direction:column;
`
