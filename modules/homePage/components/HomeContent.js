import React from 'react';
import styled from 'styled-components';

import NavbarContent from './NavbarContent';
import NotiContent from './NotiContent';
import MenuContent from './MenuContent';
import OrderContent from './OrderContent';
import ContactContent from './ContactContent';
import NewProductContent from './NewProductContent';
import { Scroll } from '../../core';

const StyledImage = styled.img`
    position: absolute;
    max-width: 100%;
    min-height: 500px;
    background-size: cover;
`;

const StyledLogo = styled.img`
    margin-top: 150px;
    width: 40%;
`;

const HomeContent = () => {
    return (
        <>
            <StyledImage id="home-image" src="/home-page-image.jpg" alt="alysa pho and banh mi" />
            <div style={{ textAlign: 'center' }}>
                <StyledLogo className="has-relative-position" src="/logo-1024x517.png" alt="alysa pho logo" />
            </div>

            <NavbarContent />

            <div style={{ marginTop: 150 }}>
                <NotiContent />
                <div className="container">
                    <hr />
                    <NewProductContent />

                    <div className="divider">
                        <hr />
                    </div>

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
