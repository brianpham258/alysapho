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

const VEGETARIANS = [
    {
        title: '301. Vegetarian Spring Roll (2 Rolls)',
        price: '6.95'
    },
    {
        title: '302. Vegetarian Salad Roll w/Tofu Puffs (2 Rolls)',
        price: '6.95'
    },
    {
        title: '303. Vegetarian Noodle w/Tofu Puffs (Soya Sauce)',
        price: '13.95'
    },
    {
        title: '304. Vegetarian Noodle w/Tofu Puffs (In Soup)',
        price: '13.95'
    },
    {
        title: '305. Vegetarian Vermicelli w/Tofu Puffs & Spring Roll',
        price: '13.95'
    },
    {
        title: '306. Vegetarian Rice w/Tofu Puffs & Mix Vegetables',
        price: '13.95'
    },
    {
        title: '307. Spicy Vegetarian Noodle Soup w/Tofu Puffs',
        price: '14.7'
    },
    {
        title: '308. Spicy Vegetarian Rice with BBQ Soya',
        price: '13.95'
    }
];

const EXTRAS = [
    {
        title: 'Tofu Puffs',
        price: '2.00'
    },
    {
        title: 'Spring Roll',
        price: '3.50'
    },
    {
        title: 'Vegetables',
        price: '3.00'
    }
];

const Vegetarian = () => {
    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">Vegetarian (Chay)</div>
            </div>

            <StyledWrapper>
                {VEGETARIANS.map(item => (
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

export default Vegetarian;
