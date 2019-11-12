import React from 'react';
import Layout from './Layout'
import GoBack from './GoBack'
import styled from 'styled-components'
import Picture from '../assets/img/partagas.jpg'

const BackGround = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${Picture}); 
    background-position: center; 
    background-size: cover; 
    height:auto;
    display:flex;
    justify-content:center;
    padding:2rem;
`
const ContentWrapper = styled.div`
        width:700px;
        height:550px;
    /*     margin:auto;
    */   background-color:#333;
        opacity:0.8;
        padding:1rem;
        text-align:justify;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        @media (max-width: 550px) {
            font-size:80%;
    }
        @media (max-width: 450px) {
            font-size:70%;
            height:600px;
    }
    /*     @media (max-width: 400px) {
            font-size:60%;
            height:700px;
    } */
 /*        @media (max-width: 350px) {
            font-size:50%;
            height:1000px;
            width:340px;
    } */
`
const Heading = styled.h1`
    color:#fff;
    margin-bottom:4rem;
    `
const Heading2 = styled.h1`
    color:#fff;
    font-size:1.3rem;
    opacity:0.6;
    margin-right:4rem;
`
const LI = styled.li`
    margin:1rem;
    color:#E0A400;
    opacity:0.8;
`
const UL = styled.ul`
    margin-left:5rem;
`
const Paragraph = styled.p`
    margin-top:2rem;
    color:#E0A400;
    text-align:center;
    font-size:1.2rem;
    @media (max-width: 500px) {
        font-size:95%;
    }
`


function Payment(props) {
    return(
        <Layout>
                <GoBack />
                <BackGround>
                    <ContentWrapper>
                        <Heading>Payment Info</Heading>
                        <Heading2>You could pay first:</Heading2>
                        <UL>
                            <LI>PayPal (bogardeka2@gmail.com)</LI>
                            <LI>Western Union (Laszlo Deak) </LI>
                            <LI>wire transfer (Please ask me)</LI>
                            <LI>E-mail transfer(bogardeka@hotmail.com)</LI>
                            <LI>Cash</LI>
                        </UL>
                        <Paragraph><strong>I will give you all the information you need!</strong></Paragraph>
                    </ContentWrapper>
                </BackGround>

        </Layout>
    )
}
export default Payment 