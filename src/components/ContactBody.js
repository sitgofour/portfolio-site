import React from 'react';
import '../styles/ContactBody.css';

const ContactBody = () => {
    return(
        <div className="Contact-body">
            <div className="contact-message">
                <h1>I would love to hear from you.</h1>
            </div>
            <div className="contact-form-container">
                <form
                    encType="application/x-www-form-urlencoded"
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
                    <button className="contact-form-submit" type="submit">Submit</button>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                </form>
            </div>
        </div>
    )
}

export default ContactBody;