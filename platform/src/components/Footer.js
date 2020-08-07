import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Footer.css'




class Footer extends React.Component {

    render () {
        return (
            <div className='FooterWrapper'>
                <p> 2020 JTM Gifts</p><span><p>Powered by your name goes here</p></span>
            </div>
        )
    }
}

export default Footer;