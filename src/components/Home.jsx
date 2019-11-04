import React from 'react'
import Layout from './Layout'
import NavBar from './NavBar'
import MainContent from './MainContent'
function Home(props) {
    return(
        <Layout>
            <NavBar />
            <MainContent />
        </Layout>
    )
}
export default Home