import React from 'react'






class Form extends React.Component {


    render () {
        return (
            <div>
                <label><strong>Voornaam *</strong>
                <input></input></label>
                <label><strong>Achternaam *</strong>
                <input></input></label>
                <label><strong>E-mailadres *</strong>
                <input></input></label>
                <label><strong>Bericht *</strong>
                <input></input></label>
                <input type='submit' placeholder='verzenden'/>
            </div>
        )
    }
}


export default Form;

