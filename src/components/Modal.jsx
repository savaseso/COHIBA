import React from 'react';
import styled from 'styled-components';
import ageLimit from '../assets/21agelimit.png'
/* import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
 */
const Modal = (props) => {
    if (!props.modalOpen || sessionStorage.hasOwnProperty('modalOpen')) {
        return null;
    } else {
        return <ModalContainer>
            <div id="modal" >
                <img src={ageLimit} alt="agelimit" />
                <Heading>This website is only for people aged 21 or more...  </Heading>
                <ButtonAge onClick={props.handleClick}>Yes, I am more than 21 years old.</ButtonAge>
            </div>
        </ModalContainer>
    }
}

const Heading = styled.h3`
@media (max-width: 501px) {
        font-size:!important 8px;
        text-aling:center;
    }
@media (max-width: 768px) {
        font-size:1rem;
    }
`

const ButtonAge = styled.button`
    text-decoration:none;
    padding:0.75rem;
    background-color:#E0A400;
    font-weight: bold;
    color:#000;
    border-radius:10%;
    margin-top:1rem;
    &:hover{
        background-color:#bf8500;
    }
    @media (max-width: 500px) {
        font-size:0.60rem;
    }
    
`




const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.6);
display:flex;
align-items:center;
justify-content:center;
z-index:3;
#modal {
    background:#000;
    width:750px;
    height:500px;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (max-width: 500px) {
        width:300px;
        height:400px;
    }
    @media (max-width: 768px) {
        width:550px;
        height:400px;
    }
}
`
export default Modal