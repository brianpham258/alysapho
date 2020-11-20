import React from 'react';

import NavbarContent from './NavbarContent';
import NotiContent from './NotiContent';
import MenuContent from './MenuContent';
import OrderContent from './OrderContent';
import ContactContent from './ContactContent';
import { Scroll } from '../../core';

const HomeContent = () => {
    return (
        <>
            <img
                id="home-image"
                src="/home-page-image.jpg"
                alt="alysa pho and banh mi"
                style={{ position: 'absolute', maxWidth: '100%', minHeight: 500, backgroundSize: 'cover' }}
            />
            <div style={{ textAlign: 'center' }}>
                <img
                    className="has-relative-position"
                    src="/logo-1024x517.png"
                    alt="alysa pho logo"
                    style={{ marginTop: 150, width: '40%' }}
                />
            </div>

            <NavbarContent />

            <div style={{ marginTop: 300 }}>
                <NotiContent />
                <div className="container">
                    <hr />
                    <OrderContent />

                    <div className="divider">
                        <hr />
                    </div>

                    <MenuContent />

                    <div className="divider">
                        <hr />
                    </div>

                    <ContactContent />
                </div>
            </div>
            <Scroll />
        </>
    );
};

export default HomeContent;
