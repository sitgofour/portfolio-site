import React from 'react';
import '../styles/ContactBody.css';

const ContactBody = () => {
    return(
        <div className="Contact-body">
            <div className="contact-message">
                <p>Hit me up if you so wish :)</p>
            </div>
            <div className="contact-form-container">
                <form
                    name="contact" 
                    className="contact-form" 
                    form method="post" 
                    netlify-honeypot="bot-field" 
                    data-netlify="true">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input name="name" type="text" placeholder=" your name"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder=" email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"placeholder=" a message lay here"></textarea>
                    <input className="contact-form-submit" type="submit" value="send"/>
                    <input type="hidden" name="bot-field" />
                </form>
            </div>
        </div>
    )
}

export default ContactBody;