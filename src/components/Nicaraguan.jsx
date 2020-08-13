
import React, { Component } from 'react';
import Layout from './Layout'
import styled from 'styled-components'
import Picture from '../assets/img/vintages.jpeg'
import ReactCountryFlag from "react-country-flag";
import { Consumer } from '../context'
import Pagination from './Pagination'



class Nicaraguan extends Component {
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
                const currentProducts = value.nicaraguan.slice(indexOfFirstPost, indexOfLastPost)
/*                 const filteredProducts = currentProducts.filter(product=>!product.soldout)
 */                return (
                    <>
                        <Layout>
                            <BackGround>
                                <ContentWrapper>
                                    <Wrapper>
                                        <Heading>Nicaraguan Cigars{/* <Twenty>20%</Twenty> off */}</Heading>
                                        <Paragraph>All prices is in US dollars!</Paragraph>
                                        <Table>
                                            <thead>
                                                <FirstRow>
                                                    <th>Name</th>
                                                    <th>{' '}</th>
                                                    <PriceRow>Price</PriceRow>
                                                </FirstRow>
                                            </thead>
                                            <tbody>
                                                {currentProducts.map(product =>
                                                    <TableRow key={product.id} onClick={() => {
                                                        value.addToCart(product.id)
                                                        value.openModal(product.id)
                                                    }}>
                                                        <Name>{product.name}</Name>
                                                       {/*  <Originalprice>${product.originalprice}</Originalprice> */}
                                                       <Soldout>{product.soldout ? 'Soldout, please order it':null}</Soldout>
                                                        <Price>${product.price}</Price>
                                                    </TableRow>
                                                )}
                                            </tbody>
                                        </Table>
                                            <Pagination postsPerPage={this.state.postPerPage} totalPosts={value.nicaraguan.length} paginate={this.paginate} currentPage={this.state.currentPage} />
                                    </Wrapper>
                                    <Paragraph>Free shipping over $200 <ReactCountryFlag code="ca" svg /> and <ReactCountryFlag code="us" svg />!</Paragraph>
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
export default Nicaraguan

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
const PriceRow = styled.th`
  /*  text-align:right; */
`
/* const Originalprice = styled.th`
    text-decoration:line-through;
    text-align:center;
    opacity:0.7;
    color:#E0A400;
    padding-right:10px;
`

const Twenty = styled.span`
    color:red;
    text-align:right;
    margin-left:1rem;
` */

const Price = styled.th`
/*     text-align:center;
 */    color:#E0A400;
     padding-right:10px;
 `
const Wrapper = styled.div`
    display:flex; 
    justify-content:center;
    flex-direction:column;
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

const Soldout = styled.th`
    color:#fff;
    opacity:0.5;
    font-size:0.8rem;
    padding:10px;
   /* // text-align:center; */
    @media (max-width: 695px) {
        font-size:0.7rem;
    }
`