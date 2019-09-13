import React from 'react';

const ContactForm = () => {
    return(
        <div className="Contact-form">
            <form>
                <label>
                    First Name
                    <input placeholder="" type="text" name="firstname" id="firstname"/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastname" id="lastname"/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email"/>
                </label>
                <label>
                    Name
                    <input type="text" name="name" id="name"/>
                </label>
            </form>
        </div>
    )
}

export default ContactForm;