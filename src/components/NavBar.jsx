import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

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
    @media (max-width: 501px) {
    flex-direction:column;
    padding:0
    }
`
//Buttons
const Li = styled.li`
    margin-right:5rem;
    margin-bottom:10px;
    @media (max-width: 1120px) {
        padding:5px;
        margin:10px;
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
    @media (max-width: 332px) {
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
    @media (max-width: 501px) {
        font-size:0.65rem;
        padding:0.5rem;
    }
 
`
const ButtonWrapper = styled.div`
    display:flex;
    @media (max-width: 800px) {
        font-size:60%;
   }
     @media (max-width: 501px) {   
        font-size:80%;
        margin-bottom:20px;
    } 
     @media (max-width: 332px) {   
        font-size:60%;
        flex-direction:column;
        align-items:center;
    } 
    
`

//Social Media
const FacebookLogo = styled(FaFacebookSquare)`
    color: #E0A400;
    font-size:3rem;
    margin-right:20px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 768px) {
       font-size:2rem;
       margin-right:5px;
    }
`
const InstagramLogo = styled(FaInstagram)`
    color: #E0A400;
    font-size:3rem;
    margin-right:20px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 768px) {
       font-size:2rem;
       margin-right:5px;
    }
`
const TwitterLogo = styled(FaTwitterSquare)`
    color: #E0A400;
    font-size:3rem;
    margin-right:20px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
    }
    @media (max-width: 768px) {
       font-size:2rem;
       margin-right:5px;

    }
`


function NavBar(props) {
    return (
        <Nav>
            <Ul>
                <ButtonWrapper>
                    <Li><NavLink to="/About">About us</NavLink></Li>
                    <Li><NavLink to="/Products">Available Products</NavLink></Li>
                    <Li><NavLink to="/Order">Order</NavLink></Li>
                    <Li><NavLink to="/Payment">Payment Info</NavLink></Li>
                </ButtonWrapper>
                <div>
                    <a href="https://www.facebook.com/cohibatoronto/" target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
                    <a href="https://www.instagram.com/cohibatoronto/" target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
                    <a href="https://twitter.com/Cohibatoronto1" target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
                </div>
            </Ul>
        </Nav>
    )
}
export default NavBar