/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContactContent = () => {
    return (
        <div style={{ marginBottom: 50 }}>
            <div className="is-page-title" id="contact">
                CONTACT
            </div>
            <div className="columns" style={{ fontSize: 27 }}>
                <div className="column has-text-center">
                    <div className="is-description">Hours:</div>
                    <div>Monday: Closed</div>
                    <div>Tuesday - Sunday: 11:00am to 7:00pm</div>
                    <div className="is-description">Address:</div>
                    <div>Unit - A 2630 Quadra Street</div>
                    <div>Victoria, BC V8T 4E4</div>
                    <div className="is-description">Tel: 250-590-2829</div>
                </div>
            </div>
            <div className="is-page-title">Alysa's Pho & Banh Mi</div>
        </div>
    );
};

export default ContactContent;
