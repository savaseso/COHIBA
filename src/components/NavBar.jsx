import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';



const NavBar = (props) => {
    return (
        <Nav>
            <Ul>
                <ButtonWrapper>
                    <Li><NavLink to="/Products">Cuban</NavLink></Li>
                    <Li><NavLink to="/Nicaraguan">Nicaraguan</NavLink></Li>
                    <Li><NavLink to="/Dominican">Dominican</NavLink></Li>
                    <Li><NavLink to="/Vismark">Vismark</NavLink></Li>
                    <Li><NavLink to="/Payment">Payment Info</NavLink></Li>
                    <Li><NavLink to="/About">About us</NavLink></Li>
                </ButtonWrapper>
                <div>
                    <a href="https://www.facebook.com/Ctorontocigar-111051953842682/" target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
                    <a href="https://www.instagram.com/c.torontocigar/" target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
                    <a href="https://twitter.com/ctorontocigar/" target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
                    <a href="https://api.whatsapp.com/send?phone=+16472713251" target="_blank" rel="noopener noreferrer"><WhatsappLogo /></a>
                </div>
                <Link to="/Cart"><ShoppingCart /></Link>
            </Ul>
        </Nav>
    )
}
export default NavBar


const Nav = styled.nav`
    background-color:#000;
    padding-top:30px;
`
const Ul = styled.ul`
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    padding:10px;
    @media (max-width: 675px) {
    flex-direction:column;
    padding:0px;

    }
`
//Buttons
const Li = styled.li`
    margin-right:3rem;
    margin-bottom:10px;
    @media (max-width: 1200px) {
        padding:5px;
        margin:5px;
    }
    @media (max-width: 768px) {
        margin:0;
    }
    @media (max-width: 570px) {
        margin:auto;
    }
    @media (max-width: 501px) {
        padding:4px;
        margin-right:2px;
    }
    @media (max-width: 455px) {
        margin:5px;
        padding:4px;
    }

`
const NavLink = styled(Link)`
    text-decoration:none;
    padding:0.75rem;
    background-color:#E0A400;
    font-weight: bold;
    color:#000;
    border-radius:10%;
    &:hover{
        background-color:#bf8500;
    }
    @media (max-width: 536px) {
        font-size:0.65rem;
        padding:0.5rem;
    }
 
`
const ButtonWrapper = styled.div`
    display:flex;
    @media (max-width: 920px) {
        font-size:60%;
   }
    @media (max-width: 675px) {
        margin-bottom:20px;
   }
     @media (max-width: 535px) {   
        font-size:80%;
        margin-bottom:20px;
    } 
     @media (max-width: 455px) {   
        font-size:60%;
        flex-direction:column;
        align-items:center;
    } 
    
`

//Social Media
const FacebookLogo = styled(FaFacebookSquare)`
    color: #E0A400;
    font-size:2.5rem;
    margin-right:5px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 920px) {
       font-size:2rem;
       margin-right:5px;
    }
`
const InstagramLogo = styled(FaInstagram)`
    color: #E0A400;
    font-size:2.5rem;
    margin-right:5px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 920px) {
       font-size:2rem;
       margin-right:5px;
    }
`
const TwitterLogo = styled(FaTwitterSquare)`
    color: #E0A400;
    font-size:2.5rem;
    margin-right:5px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 920px) {
       font-size:2rem;
    }
`
const WhatsappLogo = styled(FaWhatsapp)`
    color: #E0A400;
    font-size:2.5rem;
    margin-right:5px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 920px) {
       font-size:2rem;

    }
`
const ShoppingCart = styled(FaShoppingCart)`
    color: #E0A400;
    font-size:2rem;
    margin-right:5px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 920px) {
       font-size:1.75rem;
       margin-right:5px;
    }
`