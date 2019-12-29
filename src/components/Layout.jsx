import React from 'react'
import Footer from './Footer'
import GoBack from './GoBack'

const Layout = (props)=> {
    return(
        <div>
            <GoBack />
                { props.children }
            <Footer />
        </div>
    )
}
export default Layout