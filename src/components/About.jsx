import React from 'react';
import Layout from './Layout'
import Navbar from './GoBack'
import styled from 'styled-components'
import Picture from '../assets/img/Sir_David.jpg'


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
    padding:1rem;
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
        height:800px;
    /*     margin:auto;
    */   background-color:#333;
        opacity:0.8;
        padding:1rem;
        text-align:justify;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        @media (max-width: 550px) {
            font-size:80%;
    }
        @media (max-width: 450px) {
            font-size:60%;
    }
        @media (max-width: 400px) {
            font-size:60%;
    }
        @media (max-width: 350px) {
            font-size:50%;
            width:340px;
    }
`
const Introduction = styled.p`
        letter-spacing:2px;
        padding: 10px;
        font-size:1rem;
        font-weight:600;
        color: #fff;
        opacity:0.7;
        line-height:1.6;
/*         margin-top:rem;
 */        padding:30px;
        @media (max-width: 970px) {
           letter-spacing:1px;
    }
    @media (max-width: 450px) {
            font-size:90%;
    }
`

const UL = styled.ul`
    margin-left:4rem;
    @media (max-width: 450px) {
        font-size:0.75rem;
    }
`
const LI = styled.li`
    margin-top:10px;
    color:#E0A400;
    opacity:0.7;
`
const BottomText = styled.p`
    margin-top:2rem;
    color:#E0A400;
    text-align:center;
`


function About(props) {
    return (
        <>
            <Layout>
                <Navbar />
                <BackGround>
                    <ContentWrapper>
                        <Heading>About Us</Heading>
                        <Introduction>Hi! We are a Private <strong><span style={{ color: '#E0A400' }}>COHIBA Cigar Club in Toronto 🇨🇦</span></strong>,so we selling individually <span role="img">😀</span>Tell me what do you want! We selling only Cuban cigars with unbelievable price!😀FREE shipping around the world! You know... my Club-members bring in 1 box cigar every month and we would like selling them! The money goes to the club!</Introduction>
                        <UL>
                            <LI>COHIBA Behike 52,54,56</LI>
                            <LI>COHIBA Siglo II and Siglo VI COHIBA</LI>
                            <LI>COHIBA Esplendidos</LI>
                            <LI>COHIBA Robusto</LI>
                            <LI>Montecristo Anejados</LI>
                            <LI>COHIBA Reserva Cosecha 2014</LI>
                            <LI>H.Upmann Gran Reserva 2011</LI>
                            <LI>Partagas Serie D4</LI>
                            <LI>San Cristóbal de la Habana porcelain Jar</LI>
                            <LI>Partagas Serie D4</LI>
                            <LI>COHIBA Behike56 porcelain Jar</LI>
                            <LI>Robaina Unicos</LI>
                            <LI>Hoyo de Monterrey serie le Hoyo</LI>
                            <LI>Trinidad’s all type!</LI>
                        </UL>
                        <BottomText><strong>All cigars 100% authentic with a money back guarantee!</strong></BottomText>

                    </ContentWrapper>
                </BackGround>

            </Layout>
        </>
    )
}
export default About 