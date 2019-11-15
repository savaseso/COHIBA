import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Consumer } from '../context'


const FooterWrapper = styled.div`
    height:auto;
    background-color:#000;
`
 const LogoWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(7,auto);
    grid-template-rows: repeat(7,auto);
    justify-content:center;
    padding-top:2rem;
    @media (max-width: 960px) {
    grid-template-columns: repeat(5,auto);
    grid-template-rows: repeat(7,auto);
  }
    @media (max-width: 700px) {
    grid-template-columns: repeat(3,auto);
    grid-template-rows: repeat(7,auto);
  }
    @media (max-width: 400px) {
    grid-template-columns: repeat(2,auto);
    grid-template-rows: repeat(7,auto);
  }
`
const Logo = styled.img`
    width:100px;
    height:70px;
    margin:20px;
    cursor: pointer;
    @media (max-width: 490px) {
        width:75px;
        height:55px;
    }
`
 const Paragraph = styled.p`
    margin-top:30px;
    opacity:0.5;
    color:#fff;
`
const ParagraphWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
` 

 

const Footer = (props) => {
    return(
        <Consumer>
            {value => {
                return (
                    <FooterWrapper>
                        <LogoWrapper>
                            {value.products.map(brand => <Link key={brand.id} to="/details"><Logo  onClick={()=>value.handleDetail(brand.id)}key={brand.id} src={brand.img}  alt={brand.name} /></Link>)}
                        </LogoWrapper>
                        <ParagraphWrapper>
                            <Paragraph>Info and Order: <strong><a href="mailto:cohibatoronto@gmail.com">cohibatoronto@gmail.com</a></strong></Paragraph>
                            <Paragraph><Link to="TermsConditions">Terms &amp; Conditions</Link></Paragraph>
                            <Paragraph>Copyright 2019 © COHIBAToronto</Paragraph>
                        </ParagraphWrapper>
                    </FooterWrapper>
                )
            }}
         
       </Consumer>
    )
}
export default Footer