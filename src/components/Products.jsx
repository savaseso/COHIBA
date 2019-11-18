import React from 'react';
import Layout from './Layout'
import GoBack from './GoBack'
import styled from 'styled-components'
import CurrentProducts from '../assets/data/productList.json'
import Picture from '../assets/img/quaidorsay.jpg'

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
/*     padding:1rem;
 */    font-size:2rem;
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
    /*     margin:auto;
    */   background-color:#333;
        opacity:0.8;
/*         padding:1rem;
 */        text-align:justify;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
`
const Table = styled.table`
/*     border:solid 1px #d6d6d6;
; */
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
const Name = styled.th`
    color:#E0A400;
    padding-top:10px;
    opacity:0.7;

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
const Bundles = styled.h3`
    color:#fff;
    opacity:0.8;
    text-align:center;
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



function Products(props) {
    return (
        <>
            <Layout>
                <GoBack />
                <BackGround>
                    <ContentWrapper>
                        <Wrapper>
                            <Heading>Available products in the Club:</Heading>
                            <Table>
                                <FirstRow>
                                    <th>Name</th>
                                    <th>Price</th>
                                </FirstRow>
                                {CurrentProducts.products.map(product =>
                                    <tr>
                                        <Name>{product.name}</Name>
                                        <Price>${product.price}</Price>
                                    </tr>
                                )}
                            </Table>
                        </Wrapper>
                        <Wrapper>
                            <Bundles>Bundles</Bundles>
                            <Table>
                            {CurrentProducts.bundles.map(product =>
                                    <tr>
                                        <Name>{product.name}</Name>
                                        <Price>${product.price}/pc</Price>
                                    </tr>
                                )}
                            </Table>
                        </Wrapper>
                    </ContentWrapper>
                </BackGround>
            </Layout>
        </>
    )
}
export default Products 