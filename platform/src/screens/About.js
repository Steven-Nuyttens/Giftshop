import React from 'react'
import MandyTessa1 from './../assets/images/MandyTessa1.jpg'
import MandyTessa2 from './../assets/images/MandyTessa2.jpg'
import MandyTessa3 from './../assets/images/MandyTessa3.jpg'



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
                    <div>
                        <p>Tekst en uitleg</p>
                    </div>
                </div>
            
            
            
            </div>

        )
    }
}

export default About;