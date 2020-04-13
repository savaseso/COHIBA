import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../../context'
import {Link} from 'react-router-dom'

class CartModal extends Component{
    render(){
        return(
            <Consumer>
                {value=>{
                    if (!value.modalOpen) {
                        return null;
                    } else {
                        return <ModalContainer>
                            <div id="modal" >
                                <Heading><span style={{color:"#E0A400"}}>{value.modalProduct.name}</span> added to the cart</Heading>
                                <ButtonContainer>
                                    <Button  onClick={value.closeModal}>Products</Button>
                                    <Button to="/Cart" onClick={value.closeModal}>Go to Cart</Button>
                                </ButtonContainer>
                            </div>
                        </ModalContainer>
                    }
                }}
            </Consumer>
        )
}}


 const Button = styled(Link)`
    text-decoration:none;
    padding:0.75rem;
    background-color:#E0A400;
    font-weight: bold;
    color:#000;
    border-radius:10%;
    margin:1rem;
    &:hover{
        background-color:#bf8500;
    }
    @media (max-width: 500px) {
        font-size:0.60rem;
    }
    
` 
const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
`


const Heading = styled.h2`
    color:#fff;
    margin-bottom:2rem;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align:center;
    }
    @media (max-width: 501px) {
        font-size: 0.8rem;
        text-align:center;
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
export default CartModal