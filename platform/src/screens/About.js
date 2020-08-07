import React from 'react'
import MandyTessa1 from './../assets/images/MandyTessa1.jpg'
import MandyTessa2 from './../assets/images/MandyTessa2.jpg'
import MandyTessa3 from './../assets/images/MandyTessa3.jpg'
import './../styles/About.css'

/* link naar afhaling  */

class About extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <h3>JTM Gifts</h3>
                </div>
                <div className='AboutContainer'>
                    <div className='TeamPics'>
                        <img src={MandyTessa1}/>
                        <img src={MandyTessa2}/>
                        <img src={MandyTessa3}/>
                    </div>
                    <div className='AboutText'>
                        <p>Tekst en uitleg</p>
                        <p>In september 2015 startte onze eerste samenwerking als <strong>J</strong>uffen in dezelfde school.
                            Juf <strong>T</strong>essa was reeds juf in de derde graad en juf <strong>M</strong>andy begon in de tweede graad.
                            Al snel bleek dat we beiden dezelfde hoofdactiviteit hadden in het weekend: geld uitgeven en anderen verrassen :-).
                            Daarnaast houden we ook van lekker (en veel) eten en gezelligheid.
                        </p> 

                        <p>Na 5 schooljaren besloten we om iets met dat talent te doen. 
                            We goten onze ideeën samen en kwamen zo tot JTM Gifts.
                        </p>
 

                        <ul>
                            <li><strong>J</strong> omdat we onze huidige job nog steeds met veel passie beoefenen.</li>
                            <li><strong>T</strong> van Tessa</li>
                            <li><strong>M</strong> van Mandy</li>
                            <li><strong>Gifts</strong> omdat we graag iets geven aan anderen</li>
                        </ul>
                        <div>
                            <h5>Gewoon <strong>JTM</strong> omdat wij jou graag zien!</h5>
                            <p>We combineren dit met onze huidige job in het onderwijs. Bekijk daarom zeker onze <a>leverings- en afhalingsmogelijkheden</a> op onze website</p>
                        </div>
                          

                          

                             

                          
                    </div>
                </div>
            
            
            
            </div>

        )
    }
}

export default About;