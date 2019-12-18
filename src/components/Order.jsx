import React from 'react';
import Layout from './Layout'
import Picture from '../assets/img/Panza_cuba.jpg'
import styled from 'styled-components'


const Order = (props) => {
    return(
        <>
            <Layout>
                    <BackGround>
                        <h1 style={{color:'#fff',fontSize:'5rem',textAlign:'center'}}>SOON</h1>
                    </BackGround>
            </Layout>
        </>
    )
}
export default Order 


const BackGround = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${Picture}); 
    background-position: center; 
    background-size: cover; 
    height:700px;
    display:flex;
    justify-content:center;
    padding:2rem;
`