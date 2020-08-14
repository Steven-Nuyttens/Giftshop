import React from 'react'
import Form from './Form'
import Messages from './Messages'


class Contact extends React.Component {

    render () {
        return (
            <div>
                <h3>Contact</h3>
                <p>Neem gerust contact op met ons voor meer info</p>
                <Form />
                <Messages />
            </div>
        )
    }
}

export default Contact;