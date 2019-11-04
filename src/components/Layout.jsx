import React from 'react'
import Footer from './Footer'
function Layout(props) {
    console.log(props)
    return(
        <div>
                { props.children }
            <Footer />
        </div>
    )
}
export default Layout