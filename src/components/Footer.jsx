import React from 'react';
import styled from 'styled-components';
import CohibaPhoto from '../assets/logos/Hierro-Cohiba.png'
import BolivarPhoto from '../assets/logos/Hierro-Bolivar.png'
import RamonPhoto from '../assets/logos/Hierro-Ramon-Allones.png'
import HupmannPhoto from '../assets/logos/Hierro-H-Upmann.png'
import Trinidad from '../assets/logos/Hierro-Trinidad.png'
import Cuaba from '../assets/logos/Hierro-Cuaba.png'
import Diplomaticos from '../assets/logos/Hierro-Diplomaticos.png'
import JuanLopez from '../assets/logos/Hierro-Juan-Lopez.png'
import Vegueros from '../assets/logos/Hierro-Vegueros.png'
import SanCristobal from '../assets/logos/Hierro-San-Cristobal.png'
import Jose from '../assets/logos/Hierro-Jose.png'
import Punch from '../assets/logos/Hierro-Punch.png'
import Quentiero from '../assets/logos/Hierro-Quintero.png'
import Sancho from '../assets/logos/Hierro-Sancho.png'


const FooterWrapper = styled.div`
    height:auto;
    background-color:#000;
`
 const LogoWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(7,auto);
    grid-template-rows: repeat(7,auto);
    justify-content:center;
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
        <FooterWrapper>
             <LogoWrapper>
                <Logo src={CohibaPhoto}  alt="Cohiba" />
                <Logo src={BolivarPhoto}  alt="Bolivar" />
                <Logo src={RamonPhoto}  alt="RamonPhoto" />
                <Logo src={HupmannPhoto}  alt="Hupmann" />
                <Logo src={Trinidad}  alt="Trinidad" />
                <Logo src={Cuaba}  alt="Cuaba" />
                <Logo src={Diplomaticos}  alt="Diplomaticos" />
                <Logo src={JuanLopez}  alt="Juan-Lopez" />
                <Logo src={Vegueros}  alt="Vegueros" />
                <Logo src={SanCristobal}  alt="SanCristobal" />
                <Logo src={Jose}  alt="Jose" />
                <Logo src={Punch}  alt="Punch" />
                <Logo src={Quentiero}  alt="Quintero" />
                <Logo src={Sancho}  alt="Sancho" />
            </LogoWrapper>
            <ParagraphWrapper>
                <Paragraph>Info and Order: <strong>cohibatoronto@gmail.com</strong></Paragraph>
                <Paragraph>Copyright 2019 © COHIBAToronto</Paragraph>
            </ParagraphWrapper>

       </FooterWrapper>
    )
}
export default Footer