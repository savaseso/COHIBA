import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';


const Nav = styled.nav`
    background-color:#000;
    padding-top:30px;
`
const Ul = styled.ul`
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style:none;
    padding:10px;
    @media (max-width: 700px) {
    flex-direction:column;
    padding:20px;
    }
`
//Buttons
const Li = styled.li`
    margin-right:5rem;
    margin-bottom:10px;
    @media (max-width: 1120px) {
        padding:5px;
        margin-right:0;
    }
    @media (max-width: 800px) {
        margin:10px;
    }
    @media (max-width: 700px) {
        padding:20px;
        margin:auto;
    }
`
const NavLink = styled(Link)`
    text-decoration:none;
    padding:0.75rem;
    background-color:#E0A400;
    font-weight: bold;
    color:#000;
    border-radius:10%;
    padding:0.75rem 2rem;

    &:hover{
        background-color:#bf8500;
    }
    @media (max-width: 550px) {
        font-size:0.75rem;
    }
 
`
const ButtonWrapper = styled.div`
    display:flex;
    @media (max-width: 800px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:30px;
    }
    @media (max-width: 700px) {
        flex-direction:column;
        margin-bottom:30px;
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
`
const InstagramLogo = styled(FaInstagram)`
    color: #E0A400;
    font-size:3rem;
    margin-right:20px;
    transition:all 0.2s ease-in;
    &:hover{
        transform:scale(1.1);
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
`
function GoBack (props) {
    return(
        <Nav>
        <Ul>
                <ButtonWrapper>
                    <Li><NavLink to="/">Back</NavLink></Li>
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
export default GoBack 