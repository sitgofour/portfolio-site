import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return(
        <div className="Contact-component">
            <form>
                <div className="firstname">
                    <label>
                        First Name
                    </label>
                    <input placeholder="" type="text" name="firstname" id="firstname"/>
                </div>
                <div className="lastname">
                    <label>
                        Last Name
                    </label>
                    <input placeholder="" type="text" name="lastname" id="lastname"/>
                </div>
                <div className="email">
                    <label>
                        Email
                    </label>
                    <input placeholder="" type="email" name="email" id="email"/>
                </div>
                <div className="message">
                    <label>
                        Message
                    </label>
                    <textarea rows="50" cols="75" name="message" id="message"/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;