import React from 'react';
import styled from 'styled-components';

import { Extra } from '../../../core';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const NOODLES = [
    {
        title: '501. Spicy, Lemongrass Beef and Pork Noodle in Soup (Bún Bò Huế)',
        price: '14.95'
    },
    {
        title: '502. Chicken, Noodle in Soup (Phở Gà)',
        price: '14.95'
    },
    {
        title: '503. Seafood Noodle in Soup',
        price: '14.95'
    }
];

const EXTRAS = [
    {
        title: 'Bean Sprouts and Basil',
        price: '2.00'
    },
    {
        title: 'Broccoli, Carrot, Rutabaga and Cabbage',
        price: '3.00'
    },
    {
        title: 'Meats',
        price: '3.00'
    },
    {
        title: 'Spicy Broth',
        price: '0.75'
    },
    {
        title: 'Extra Broth 32oz ',
        price: '4.49'
    }
];

const Noodle = () => {
    return (
        <div id="special">
            <div className="menu-title-section">
                <div className="is-menu-title">House Specialty Noodle</div>
            </div>

            <StyledWrapper>
                {NOODLES.map(item => (
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                    </StyledTitleMenu>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <Extra extras={EXTRAS} />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Noodle;
