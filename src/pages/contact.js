import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <div className="Contact-page-wrapper">
            <PageLayout>
                <ContactForm />
            </PageLayout>
        </div>
    )
}

export default Contact;