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
import Belinda from '../assets/logos/Belinda.png'
import Robaina from '../assets/logos/Hierro-Robaina.png'
import SaintLuis from '../assets/logos/Hierro-Saint-Luis-Rey.png'
import Rafael from '../assets/logos/Hierro-Rafael-Gonzalez.png'
import ElRey from '../assets/logos/Hierro-El-Rey-del-Mundo.png'
import Fonseca from '../assets/logos/Hierro-Fonseca.png'
import Monterrey from '../assets/logos/Hierro-Hoyo-de-Monterrey.png'
import Flor from '../assets/logos/Hierro-La-Flor-de-Cano.png'
import Gloria from '../assets/logos/Hierro-La-Gloria-Cubana.png'
import MonteCristo from '../assets/logos/Hierro-Montecristo.png'
import Partagas from '../assets/logos/Hierro-Partagás.png'
import Larranaga from '../assets/logos/Hierro-Por-Larranaga.png'
import Orsay from '../assets/logos/Hierro-Quai-D-Orsay.png'

import Troya from '../assets/logos/Troyaa.png'

import { Link } from 'react-router-dom'


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
    @media (max-width: 490px) {
        width:50px;
        height:35px;
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
                <Logo src={Belinda}  alt="Belinda" />
                <Logo src={Robaina}  alt="Robiana" />
                <Logo src={Troya}  alt="Sancho" />
                <Logo src={SaintLuis}  alt="SaintLuis" />
                <Logo src={Rafael}  alt="Rafael" />
                <Logo src={ElRey}  alt="ElRey" />
                <Logo src={Fonseca}  alt="Fonseca" />
                <Logo src={Monterrey}  alt="Monterrey" />
                <Logo src={Flor}  alt="Flor" />
                <Logo src={Gloria}  alt="Gloria" />
                <Logo src={MonteCristo}  alt="MonteCristo" />
                <Logo src={Partagas}  alt="Partagas" />
                <Logo src={Larranaga}  alt="Larranaga" />
                <Logo src={Orsay}  alt="Orsay" />
            </LogoWrapper>
            <ParagraphWrapper>
                <Paragraph>Info and Order: <strong><a href="mailto:cohibatoronto@gmail.com">cohibatoronto@gmail.com</a></strong></Paragraph>
                <Paragraph><Link to="TermsConditions">Terms &amp; Conditions</Link></Paragraph>
                <Paragraph>Copyright 2019 © COHIBAToronto</Paragraph>
            </ParagraphWrapper>

       </FooterWrapper>
    )
}
export default Footer