import React, { Component } from 'react';
import styled from 'styled-components'
import Picture from '../assets/img/main.jpeg'
import ReactPlayer from 'react-player'
import Modal from './Modal'
import ReactCountryFlag from "react-country-flag";



class MainContent extends Component {
    state = {
        modalOpen: true
    }
     handleClick = () => {
        this.setState({ modalOpen: false });
        sessionStorage.setItem('modalOpen', false)
    }
    render() {
        
        const { modalOpen } = this.state
        return (
            <ShowCase>
                <ShowCaseContent>
                        <Modal modalOpen={modalOpen} handleClick={this.handleClick}/>
                    <ContentWrapper>
                        <Heading >Welcome!</Heading>
                        <Paragraph>We are a Private <strong><span style={{ color: '#E0A400' }}>C.toronto Cigar Club</span></strong> in Toronto, ...so we selling individually and privately ...only for YOU! Tell me what  would you like! We selling only Cuban cigars with unbelievable price! Free shipping over $200 <ReactCountryFlag code="ca" svg /> and <ReactCountryFlag code="us" svg />!</Paragraph>
                        <Cite><cite>“Cigars are an experience of a qualitative difference in life.”</cite></Cite>
                        <p style={{ textAlign: 'center', margin: '10px', opacity: 0.6 }}>Aristotle</p>
                    </ContentWrapper>
                    <Video
                        url="https://www.youtube.com/watch?v=eJI4-87ErKg"
                        loop
                        playing={sessionStorage.hasOwnProperty('modalOpen')? true : null}
                        showinfo="true"
                        width={document.documentElement.clientWidth < 540 ? '320px' : '500px'}
                    />
                </ShowCaseContent>
            </ShowCase>
        )
    }
}
export default MainContent 


const ShowCase = styled.main`
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${Picture}); 
        background-position: center; 
        background-size: cover; 
        height:auto;
`
const ShowCaseContent = styled.div`
        z-index: 1; 
        max-width:1200px;
        margin:auto; 
        color:#fff;
        position:relative;
        display:flex;
        justify-content:space-around;
        align-items:center;
        @media (max-width: 970px) {
            flex-direction:column;
    }
`
const ContentWrapper = styled.div`
        width:500px;
        height:550px;
        background-color:#333;
        opacity:0.8;
        padding:1rem;
        text-align:justify;
        border-radius:20px;
        margin-top:5rem;
        margin-bottom:5rem;
        @media (max-width: 670px) {
            margin-bottom:2rem;
            width:330px;
            height:600px;
    }
`
const Heading = styled.h1`
        text-align: center;
        margin-top:2rem;
`
const Paragraph = styled.p`
        letter-spacing:2px;
        padding: 10px;
        font-size:1rem;
        font-weight:600;
        color: #fff;
        opacity:0.7;
        line-height:1.6;
        margin-top:3rem;
        padding:30px;
        @media (max-width: 970px) {
           letter-spacing:1px;
    }
    @media (max-width: 500px) {
       font-size:0.75rem;
    }
`
const Cite = styled.p`
        margin-top:2rem;
        opacity:0.4;
        text-align:center;
`
const Video = styled(ReactPlayer)`
        margin-top:8rem;
        @media (max-width: 970px) {
            margin-top:5rem;
            margin-bottom:5rem;
    }
`