import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactBody from '../components/ContactBody';

const Contact = () => {
    return(
        <div className="Contact-page-wrapper">
            <PageLayout>
                <ContactBody />
            </PageLayout>
        </div>
    )
}

export default Contact;