import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <div className="Contact-page-wrapper">
            <PageLayout>
                <div>
                    <h1>Hello.</h1>
                </div>
                <ContactForm />
            </PageLayout>
        </div>
    )
}

export default Contact;