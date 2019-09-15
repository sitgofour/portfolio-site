import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/ContactForm';
import ContactAside from '../components/ContactAside';

const Contact = () => {
    return(
        <div className="Contact-page-wrapper">
            <PageLayout>
                <ContactAside />
                <ContactForm />
            </PageLayout>
        </div>
    )
}

export default Contact;