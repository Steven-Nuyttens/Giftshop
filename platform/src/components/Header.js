import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/Header.css'
import jtmlogo from './../assets/images/jtmlogo.jpg'


class Header extends React.Component {

    render () {
        return (
            <div className='HeaderWrapper'>
                <div className='HeaderImg'><img src={jtmlogo} /><h2>JTM GIFTS</h2></div>
                <div><Link className="pages" to="/"> HOME </Link></div>
				<div><Link className="pages" to="/About"> ABOUT </Link></div>
				<div><Link className="pages" to="/Products"> ONZE MANDEN </Link></div>
				<div><Link className="pages" to="/Contact"> CONTACT </Link></div>
				<div><Link className="pages" to="/Afhaling"> AFHALING </Link></div>
				<div><Link className="pages" to="/Reacties"> REACTIES </Link></div>
            </div>
        )
    }
}

export default Header;