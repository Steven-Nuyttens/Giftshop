import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'


class Header extends React.Component {

    render () {
        return (
            <div className='HeaderWrapper'>
                <div><Link className="pages" to="/"> Home </Link></div>
				<div><Link className="pages" to="/About"> About </Link></div>
				<div><Link className="pages" to="/Contact"> Contact </Link></div>
				<div><Link className="pages" to="/Afhaling"> Afhaling </Link></div>
				<div><Link className="pages" to="/Reacties"> Reacties </Link></div>
            </div>
        )
    }
}

export default Header;