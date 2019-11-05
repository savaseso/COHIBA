import React from 'react'
import styled from 'styled-components'
import Picture from '../assets/img/trinidad.jpg'
import ReactPlayer from 'react-player'


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
    /*     margin:auto;
    */    background-color:#333;
        opacity:0.8;
        padding:1rem;
        text-align:justify;
        border-radius:20px;
        margin-top:5rem;
        margin-bottom:5rem;
        @media (max-width: 670px) {
            margin-bottom:2rem;
            width:330px;
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
        margin-top:4rem;
        padding:30px;
        @media (max-width: 970px) {
           letter-spacing:1px;
    }
`
const Video = styled(ReactPlayer)`
        margin-top:8rem;
  /*       cursor: none;
        pointer-events:none; */
        @media (max-width: 970px) {
            margin-top:5rem;
            margin-bottom:5rem;
    }
        @media (max-width: 670px) {
/*             display:none;
 */    }
`

function MainContent (props) {
    console.log(document.documentElement.clientWidth)
    return(
        <ShowCase>
            <ShowCaseContent>
                <ContentWrapper>
                    <Heading >Welcome!</Heading>
                    <Paragraph>We are a Private <strong><span style={{ color: '#E0A400' }}>COHIBA Cigar Club</span></strong> in Toronto, ...so we selling individually and privately ...only for YOU! Tell me what  would you like! We selling only Cuban cigars with unbelievable price! FREE shipping around the world!</Paragraph>
                </ContentWrapper>
                <Video
                    url="https://www.youtube.com/watch?v=eJI4-87ErKg"
                    loop
                    playing
                    showinfo="true"
                    width={document.documentElement.clientWidth<540 ? '320px' : '500px'}
               />
            </ShowCaseContent>
        </ShowCase>
    )
}
export default MainContent 