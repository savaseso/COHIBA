import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'

function PageNotFound(props) {
    return(
        <Layout>
            <ContentWrapper>
                <Heading>Sorry, the requested page could not be found.</Heading>
            </ContentWrapper>
        </Layout>
    )
}
export default PageNotFound


const ContentWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:60vh;
    background-color:#969696;

`
const Heading = styled.h1`
    @media (max-width: 768px) {
        font-size:1rem;
    }
    @media (max-width: 500px) {
        font-size:0.75rem;
    }

`