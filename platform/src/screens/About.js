import React from 'react'
import MandyTessa1 from './../assets/images/MandyTessa1.jpg'
import MandyTessa2 from './../assets/images/MandyTessa2.jpg'
import MandyTessa3 from './../assets/images/MandyTessa3.jpg'
import './About.css'



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
                        <p>In september 2015 startte onze eerste samenwerking als Juffen in dezelfde school. 

Juf Tessa was reeds juf in de derde graad en juf Mandy begon in de tweede graad.

Al snel bleek dat we beiden dezelfde hoofdactiviteit hadden in het weekend: geld uitgeven en anderen verrassen :-). Daarnaast houden we ook van lekker (en veel) eten en gezelligheid. 

 

Na 5 schooljaren besloten we om iets met dat talent te doen. 

We goten onze ideeën samen en kwamen zo tot JTM Gifts.

 

                          J omdat we onze huidige job nog steeds met veel passie beoefenen.

                          T van Tessa

                          M van Mandy   

                          Gifts omdat we graag iets geven aan anderen</p>
                    </div>
                </div>
            
            
            
            </div>

        )
    }
}

export default About;