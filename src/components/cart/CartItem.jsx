import React from 'react'
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components'


const CartItem = ({ value, item }) => {
    const { id, name, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <Container>
            <ItemContainer>
                <strong><ProductTitle>{name}</ProductTitle></strong>
            </ItemContainer>
            <ItemContainer>
                <p>${' '}{price}</p>
            </ItemContainer>
            <ItemContainer>
                <div>
                    <div>
                        <Button onClick={() => decrement(id)} >-</Button>
                        <span>{count}</span>
                        <Button onClick={() => increment(id)} >+</Button>
                    </div>
                </div>
            </ItemContainer>
            <ItemContainer>
                <div onClick={() => removeItem(id)}>
                    <TrashIcon />
                </div>
            </ItemContainer>
            <ItemContainer>
                <strong>item total: $ {total}</strong>
            </ItemContainer>
        </Container>
    )
}
export default CartItem


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(5,2fr);
    margin:2rem;
    text-align:center;
    @media (max-width: 768px) {
        grid-template-columns:4fr;
        border:solid 1px #E0A400;
        margin-bottom:2rem;
        opacity:0.8;
  }
`
const ItemContainer = styled.div`
    color:#E0A400;
    @media (max-width:768px) {
       padding:0.75rem;
    }
`
const ProductTitle = styled.span`
       @media (max-width:768px) {
        color:#fff;
        opacity:0.8;
    }
`
const Button = styled.span`
    border:1px solid #E0A400;
    padding:10px 10px;
    margin:10px;
    cursor: pointer;
    &:hover{
        background-color:#E0A400;
        color:#000;
    }

`
const TrashIcon = styled(FaTrash)`
    color: red;
    cursor:pointer;
    &:hover{
        transform:scale(1.1)
    }

`