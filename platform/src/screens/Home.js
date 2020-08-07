import React from 'react'
import './../styles/Home.css'
import {Link} from 'react-router-dom'
import Card from './../components/Card'
/* display random products onload */
class Home extends React.Component {

    render () {
        return (
            <div>
                <h3>Welkom op onze webshop!</h3>

                <h5>Op zoek naar een origineel cadeau?</h5>
                
                <p>Bestel een mand naar keuze uit ons vast of seizoensgebonden assortiment! </p>

                <div>
                    <Card />
                </div>
            </div>
        )
    }
}

export default Home;