import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return(
        <div className="Contact-form">
            <form>
                <div className="firstname">
                    <label>
                        First Name
                        <input placeholder="" type="text" name="firstname" id="firstname"/>
                    </label>
                </div>
                <div className="lastname">
                    <label>
                        Last Name
                        <input placeholder="" type="text" name="lastname" id="lastname"/>
                    </label>
                </div>
                <div className="email">
                    <label>
                        Email
                        <input placeholder="" type="email" name="email" id="email"/>
                    </label>
                </div>
                <div className="message">
                    <label>
                        Message
                        <textarea rows="50" cols="75" name="message" id="message"/>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;