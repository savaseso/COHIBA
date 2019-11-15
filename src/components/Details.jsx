import React from 'react'
import { Consumer } from '../context'
import Layout from './Layout'
import GoBack from './GoBack'
import styled from 'styled-components'


const ContentWrapper = styled.div`
    width:700px;
    margin:auto;
    height:550px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    color:#fff;
    opacity:0.8;
    @media (max-width: 768px) {
        width:501px;
    }
    @media (max-width: 501px) {
        width:320px;
        height:650px;

    }
`
const Wrapper = styled.div`
    background-color:#333;
`
const Heading = styled.h1`
    margin-bottom:1rem;
`


function Details(props) {
    return(
        <Consumer>
            {value=>{
                const { name, description,year } = value.detailProduct
                return(
                    <Layout>
                        <GoBack />
                        <Wrapper>
                            <ContentWrapper>
                                <Heading>{name}{' '}<span>{year}</span></Heading>
                                <p>{description}</p>
                            </ContentWrapper>
                        </Wrapper>
                    </Layout>
                )
            }}

        </Consumer>
    )
}
export default Details