import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactBody from '../components/ContactBody';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return(
        <div className="Contact-page-wrapper">
            <PageLayout>
                <Helmet>
                    <title>Contact - Evan</title>
                    <meta name="description" content="Evan Smith's portfolio contact page" />
                </Helmet>
                <ContactBody />
            </PageLayout>
        </div>
    )
}

export default Contact;