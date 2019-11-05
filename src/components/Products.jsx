import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout'
import GoBack from './GoBack'
import styled from 'styled-components'
import CurrentProducts from '../assets/data/data.json'
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
    padding:2rem;
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
        height:700px;
    /*     margin:auto;
    */   background-color:#333;
        opacity:0.8;
        padding:1rem;
        text-align:justify;
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
        font-size:75%;
    }
    @media (max-width: 470px) {
        font-size:65%;
    }
    @media (max-width: 400px) {
        font-size:50%;
    }
`
const FirstRow = styled.tr`
    color:#fff;
    opacity:0.6;
    
`
const FirstColumn = styled.th`
    color:#E0A400;
    padding-top:10px;
    opacity:0.7;

`
const OldPrice = styled.th`
    text-decoration: line-through;
    text-align:center;
    color:red;
`
const NewPrice = styled.th`
    text-align:center;
    color:#E0A400;
`



function Products(props) {
    return (
        <>
            <Layout>
                <GoBack />
                <BackGround>
                    <ContentWrapper>
                        <Heading>Currently available in the Club:</Heading>
                        <Table>
                            <FirstRow>
                                <th>Name</th>
                                <th>Old Price</th>
                                <th>New Price</th>
                            </FirstRow>
                            {CurrentProducts.map(product =>
                                <tr>
                                    <FirstColumn>{product.name}</FirstColumn>
                                    <OldPrice>${product.oldprice}</OldPrice>
                                    <NewPrice>${product.newprice}</NewPrice>
                                </tr>
                            )}
                          </Table>  
                    </ContentWrapper>
                </BackGround>
            </Layout>
        </>
    )
}
export default Products 