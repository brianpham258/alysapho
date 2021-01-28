import React from 'react';
import styled from 'styled-components';

import NavbarContent from './NavbarContent';
import NotiContent from './NotiContent';
import MenuContent from './MenuContent';
import OrderContent from './OrderContent';
import ContactContent from './ContactContent';
import NewProductContent from './NewProductContent';
import { Scroll } from '../../core';

const StyledImage = styled.div`
    width: 100%;
    background-size: cover;
    background: url('/home-page-image.jpg');
`;

const StyledLogo = styled.div`
    width: 100%;
    z-index: 5;
    text-align: center;
    padding: 15% 0;
`;

const HomeContent = () => {
    return (
        <>
            <StyledImage id="home">
                <StyledLogo>
                    <img
                        className="has-relative-position"
                        src="/logo-1024x517.png"
                        alt="alysa pho logo"
                        style={{ width: '50%' }}
                    />
                </StyledLogo>
            </StyledImage>

            <NavbarContent />

            <div className="mt-32">
                <NotiContent />
                <div className="container">
                    <hr />
                    <NewProductContent />

                    <div id="order" className="divider">
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
