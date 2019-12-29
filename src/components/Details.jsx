import React, { Component } from 'react'
import { Consumer } from '../context'
import Layout from './Layout'
import styled from 'styled-components'
import Default from './Default'



class Details extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { name, description, year, logo } = value.detailProduct
                    if (value.detailProduct.hasOwnProperty('country')) {
                        return (
                            <Layout>
                                <Wrapper>
                                    <ContentWrapper>
                                        <Img src={logo} alt={name} />
                                        <Heading>{name}{' '}<span>{year}</span></Heading>
                                        <p>{description}</p>
                                    </ContentWrapper>
                                </Wrapper>
                            </Layout>
                        )
                    } else {
                        return <Default />
                    }
                }}

            </Consumer>
        )
    }
}
export default Details

const ContentWrapper = styled.div`
    width:700px;
    margin:auto;
    height:550px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:justify;
    color:#fff;
    opacity:0.8;
    @media (max-width: 768px) {
        width:501px;
        height:600px;

        font-size:90%;

    }
    @media (max-width: 501px) {
        width:320px;
        height:650px;
        font-size:80%;

    }
`
const Wrapper = styled.div`
    background-color:#333;
`
const Heading = styled.h1`
    margin-bottom:1rem;
`
const Img = styled.img`
    height:auto;
    width:300px;
    margin-bottom:1rem;
`