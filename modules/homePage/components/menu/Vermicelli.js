import React from 'react';
import styled from 'styled-components';

import { Extra } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const VERMICELLIES = [
    {
        title: '701. Grilled Lemongrass Pork and Spring Roll (Bún Heo Nướng, Chả Giò)'
    },
    {
        title: '702. Grilled Lemongrass Chicken and Spring Roll (Bún Gà Nướng, Chả Giò)'
    },
    {
        title: '703. Grilled Lemongrass Beef and Spring Roll (Bún Bò Nướng, Chả Giò)'
    },
    {
        title: '704. Grilled Pork Sausage and Spring Roll (Bún Nem Nướng, Chả Giò)'
    }
];

const EXTRAS = [
    {
        title: 'Meat or Sausage',
        price: '3.00'
    },
    {
        title: 'Vegetable',
        price: '3.00'
    },
    {
        title: 'Spring Roll',
        price: '3.50'
    }
];

const Vermicelli = () => {
    return (
        <div>
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Vermicelli (Bún)</div>
                    <div className="column is-2">$13.95</div>
                </div>
                <div className="is-description">
                    Served with lettuce, bean sprouts, cucumbers, green onion oil and fish sauce
                </div>
            </div>

            <StyledWrapper>
                {VERMICELLIES.map(item => (
                    <div className="has-margin-bottom">{item.title}</div>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <Extra extras={EXTRAS} />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Vermicelli;
