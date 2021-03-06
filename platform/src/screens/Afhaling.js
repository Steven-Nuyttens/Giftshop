import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Conditions from './Conditions'
import PrivacyVerklaring from './PrivacyVerklaring'




class Afhaling extends React.Component {

    render () {
        return (
            <div>
                <h3>Afhaling / Levering</h3>
                <p>We combineren dit met onze huidige job in het onderwijs.
                    Bekijk daarom zeker de afhaal- en leveringstermijn en onze afhaal- en leveringsmogelijkheden hieronder.</p>

                <h4>Afhaal- en leveringstermijn</h4>
                <p>We rekenen voor elke mand uit ons vast en seizoensgebonden assortiment twee werkdagen* na bevestiging van uw bestelling 
                    én ontvangst van betaling om ze klaar te maken. 
                    Concreet betekent dit: wie op maandag bestelt voor 19u, 
                    kan zijn/haar bestelling de eerstvolgende woensdag* afhalen of laten leveren. 
                    Na 19u wordt de datum verplaatst naar de eerstvolgende vrijdag/zaterdag (naar keuze). 
                    Wie op woensdag bestelt voor 19u, kan zijn/haar bestelling de eerstvolgende vrijdag/zaterdag* (naar keuze) afhalen of laten leveren. 
                    Na 19u wordt de datum verplaatst naar de eerstvolgende woensdag.
                    Voor gepersonaliseerde manden op maat rekenen wij minstens vijf werkdagen na bevestiging van uw bestelling om deze af te halen of te leveren. 
                    Wij geven steeds een seintje wanneer uw bestelling klaar is en spreken een afhaal- of leverdatum af via mail, 
                    rekening houdend met de door de klant opgegeven beschikbare dag(en). </p>
                    <div>
                        <h4>Afhalen</h4>
                        <p><strong>Afhalen</strong> in Wambeek is mogelijk op:</p>
                        <ul>
                            <li>woensdag van 14u tot 20u</li>
                            <li>vrijdag van 17u tot 20u</li>
                            <li>zaterdag van 9u tot 12u</li>
                        </ul>

                        <p><strong>Afhalen</strong> in Buggenhout en Malderen is mogelijk <strong>na afspraak</strong>.</p>

                        <h4>Leveren</h4>
                        <p><strong>Leveren</strong> is mogelijk op:</p>
                        <ul>
                            <li>woensdag van 16u tot 20u</li>
                            <li>zaterdag van 9u tot 13u</li>
                        </ul>

                        <p>Vanaf 50 euro leveren wij gratis aan de volgende postcodes in deze provincies:</p>
                        <div className='ProvincieContainer'>
                            <div>
                                <h6>Vlaams-Brabant</h6>
                                <ul>
                                    <li>1602</li>
                                    <li>1700</li>
                                    <li>1701</li>
                                    <li>1702</li>
                                    <li>1703</li>
                                    <li>1730</li>
                                    <li>1731</li>
                                    <li>1740</li>
                                    <li>1741</li>
                                    <li>1742</li>
                                    <li>1745</li>
                                    <li>1750</li>
                                    <li>1755</li>
                                    <li>1760</li>
                                    <li>1761</li>
                                    <li>1770</li>
                                    <li>1780</li>
                                    <li>1785</li>
                                    <li>1790</li>
                                    <li>1840</li>
                                    <li>1850</li>
                                    <li>1851</li>
                                    <li>1852</li>
                                    <li>1860</li>
                                    <li>1861</li>
                                    <li>1880</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Antwerpen</h6>
                                <ul>
                                    <li>2830</li>
                                    <li>2870</li>
                                    <li>2880</li>
                                    <li>2890</li>

                                </ul>
                            </div>
                            <div>
                                <h6>Oost-Vlaanderen</h6>
                                <ul>
                                    <li>9200</li>
                                    <li>9255</li>
                                    <li>9280</li>
                                    <li>8310</li>
                                    <li>9320</li>
                                </ul>
                            </div>
                            <p>* tenzij anders afgesproken via mail: info@jtmgifts.be</p>
                           
                        </div>
                    </div>
                    <div>
                        <BrowserRouter>
                        <Route path='/Conditions' component={Conditions}/>
                        <Link to='/Conditions'>Algemene voorwaarden en privacy</Link>
                        <Route path='/PrivacyVerklaring' component={PrivacyVerklaring}/>
                        <Link to='/PrivacyVerklaring'>Privacyverklaring</Link>
                        </BrowserRouter>
                    </div>
            </div>
        )
    }
}

export default Afhaling;