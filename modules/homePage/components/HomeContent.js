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
                alt="Home Page"
                style={{ position: 'absolute', maxWidth: '100%', minHeight: 500 }}
            />
            <div style={{ textAlign: 'center' }}>
                <img
                    className="has-relative-position"
                    src="/logo-1024x517.png"
                    alt="Alysa logo"
                    style={{ marginTop: 150, width: '40%' }}
                />
            </div>

            <NavbarContent />

            <div style={{ marginTop: 300 }}>
                <NotiContent />
                <div className="container">
                    <hr />
                    <MenuContent />

                    <div className="divider">
                        <hr />
                    </div>

                    <OrderContent />

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
