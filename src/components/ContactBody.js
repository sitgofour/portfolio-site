import React from 'react';
import '../styles/ContactBody.css';

const ContactBody = () => {
    return(
        <div className="Contact-body">
            <div className="contact-message">
                <p>Hit me up if you so wish :)</p>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <label for="name">
                        Name
                    </label>
                    <input name="name" type="text" placeholder="your name"/>
                    <label for="email">Email</label>
                    <input name="email" type="email" placeholder="email"/>
                    <label for="message">Message</label>
                    <input name="message" type="text" placeholder="a message lay here"/>
                </form>
            </div>
        </div>
    )
}

export default ContactBody;