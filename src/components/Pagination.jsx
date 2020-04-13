import React from 'react';
import styled from 'styled-components'


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <Nav>
            <Ul>
                {pageNumbers.map(number => (
                    <Li key={number}>
                        <Pages currentPage={currentPage} number={number} onClick={() => paginate(number)} href="#">{number}</Pages>
                    </Li>
                ))}
            </Ul>
        </Nav>
    )
}

export default Pagination

const Nav = styled.nav`
margin-bottom:2rem;
`

const Ul = styled.ul`
display:flex;
justify-content:center;
`
const Li = styled.li`
list-style:none;
margin:3px;
padding:3px;
font-size:1.5rem;
@media (max-width: 500px) {
        font-size:1rem
    }
`

const Pages = styled.a`
    text-decoration:none;
    color: ${props => props.currentPage === props.number ? 'yellow' : '#e0a400'}
`
