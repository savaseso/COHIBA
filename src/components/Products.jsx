import React, { Component } from 'react';
import Layout from './Layout'
import styled from 'styled-components'
import CurrentProducts from '../assets/data/productList.json'
import Picture from '../assets/img/quaidorsay.jpg'
import ReactCountryFlag from "react-country-flag";
import { Consumer } from '../context'
import Pagination from './Pagination'



class Products extends Component {
    state = {
        currentPage: 1,
        postPerPage: 10
    }
        //change page
    paginate = (pageNumber) => this.setState({currentPage:pageNumber})
    render() {
        return (
            <Consumer>{value => {
                const indexOfLastPost = this.state.currentPage * this.state.postPerPage
                const indexOfFirstPost = indexOfLastPost - this.state.postPerPage
                const currentProducts = value.retailProducts.slice(indexOfFirstPost, indexOfLastPost)
                return (
                    <>
                        <Layout>
                            <BackGround>
                                <ContentWrapper>
                                    <Wrapper>
                                        <Heading>ATTENTION!</Heading>
                                        <Paragraph>Any Cuban <ReactCountryFlag code="cu" svg />  cigars we are trying to obtain ..please indicate if they are not on the list!?</Paragraph>
                                        <Table>
                                            <thead>
                                                <FirstRow>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                </FirstRow>
                                            </thead>
                                            <tbody>
                                                {currentProducts.map(product =>
                                                    <TableRow key={product.id} onClick={() => {
                                                        value.addToCart(product.id)
                                                        value.openModal(product.id)
                                                    }}>
                                                        <Name>{product.name}</Name>
                                                        <Price>${product.price}</Price>
                                                    </TableRow>
                                                )}
                                            </tbody>
                                        </Table>
                                            <Pagination postsPerPage={this.state.postPerPage} totalPosts={value.retailProducts.length} paginate={this.paginate} currentPage={this.state.currentPage} />
                                    </Wrapper>
                                    <Wrapper>
                                        <Bundles>Singles</Bundles>
                                        <Table>
                                            <tbody>
                                                {CurrentProducts.bundles.map(product =>
                                                    <TableRow key={product.id} onClick={() => {
                                                        value.addToCart(product.id)
                                                        value.openModal(product.id)
                                                    }}>
                                                        <Name>{product.name}</Name>
                                                        <Price>${product.price}/pc</Price>
                                                    </TableRow>
                                                )}
                                            </tbody>
                                        </Table>
                                    </Wrapper>
                                    <Paragraph>Free shipping in <ReactCountryFlag code="ca" svg /> and <ReactCountryFlag code="us" svg />!</Paragraph>
                                </ContentWrapper>
                            </BackGround>
                        </Layout>
                    </>
                )
            }}

            </Consumer>
        )
    }
}
export default Products

const BackGround = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${Picture}); 
    background-position: center; 
    background-size: cover; 
    height:auto;
    display:flex;
    justify-content:center;
    padding:2rem;
`

const Heading = styled.h1`
    text-align: center;
    color:#fff;
    font-size:2rem;
    @media (max-width: 625px) {
        font-size:1.2rem;
    }
    @media (max-width: 450px) {
        font-size:0.75rem;
    }
 `

const ContentWrapper = styled.div`
        width:700px;
        height:auto;
        background-color:#333;
        opacity:0.8;
        text-align:justify;
        border-radius:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
`
const Table = styled.table`
    padding:10px;
    @media (max-width: 625px) {
        font-size:80%;
    }
    @media (max-width: 500px) {
        font-size:65%;
    }
    @media (max-width: 400px) {
        font-size:60%;
    }
`
const FirstRow = styled.tr`
    color:#fff;
    opacity:0.6;
    
`
const TableRow = styled.tr`
    cursor: pointer;
`
const Name = styled.th`
    color:#E0A400;
    padding-top:10px;
    opacity:0.8;
    padding:10px;
    &:hover{
        opacity:1;
    }

`

const Price = styled.th`
    text-align:center;
    color:#E0A400;
    padding-right:10px;
`
const Wrapper = styled.div`
    display:flex; 
    justify-content:center;
    flex-direction:column;
`
const Bundles = styled.h3`
    color:#fff;
    opacity:0.8;
    text-align:center;
    @media (max-width: 625px) {
        font-size:80%;
    }
    @media (max-width: 500px) {
        font-size:65%;
    }
    @media (max-width: 400px) {
        font-size:60%;
    }
`

const Paragraph = styled.p`
    padding:20px;
    color:#fff;
    font-size:1rem;
    text-align:center;
    @media (max-width: 501px) {
        font-size:0.9rem;
    }
`