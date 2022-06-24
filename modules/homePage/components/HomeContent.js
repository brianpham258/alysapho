import React from 'react';
import styled from 'styled-components';

import { NotiContentContainer, ExtraNotiContainer } from '../containers';
import NavbarContent from './NavbarContent';
import MenuContent from './MenuContent';
import OrderContent from './OrderContent';
import ContactContent from './ContactContent';
import NewProductContent from './NewProductContent';
import { Scroll } from '../../core';

const StyledImage = styled.div`
    width: 100%;
    background-size: cover;
    background: url('/home-page-image.jpg');
    background-repeat: none;
`;

const StyledLogo = styled.div`
    width: 100%;
    z-index: 5;
    text-align: center;
    padding: 10% 0;
`;

const HomeContent = () => {
    return (
        <>
            <StyledImage>
                <StyledLogo>
                    <img
                        className="has-relative-position"
                        src="/logo-1024x517.png"
                        alt="alysa pho logo"
                        style={{ width: '40%' }}
                    />
                </StyledLogo>
            </StyledImage>

            <NavbarContent />

            <div className="mt-32">
                <NotiContentContainer />
                <div className="container">
                    <hr />
                    <NewProductContent />

                    <div id="order" className="divider">
                        <hr />
                    </div>

                    <OrderContent />

                    <div id="menu" className="divider">
                        <hr />
                    </div>

                    <MenuContent />

                    <div id="extra-noti" className="divider">
                        <hr />
                    </div>

                    <ExtraNotiContainer />

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
