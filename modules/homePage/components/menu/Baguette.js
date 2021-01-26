import React from 'react';
import styled from 'styled-components';

import { Extra } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const BAGUETTES = [
    {
        title: "101. Alysa's Classic (Pâté, Pork Sausage, Headcheese and jambon)"
    },
    {
        title: '102. BBQ Pork (Xá Xíu)'
    },
    {
        title: '103. Sausage (Nem Nướng)'
    },
    {
        title: '104. Grilled Chicken (Gà Nướng)'
    },
    {
        title: '105. Grilled Pork (Heo Nướng)'
    },
    {
        title: '106. Grilled Beef (Bò Nướng)'
    },
    {
        title: '107. Shredded Chicken (Gà Chà Bông)'
    },
    {
        title: '108. Curry Tofu Puffs (Cari Chay)'
    },
    {
        title: '109. Soya Tofu Puffs (Xì Dầu Chay)'
    },
    {
        title: '110. Five-Spice Pork (Ngũ Vị Hương)'
    },
    {
        title: '111. BBQ Soya'
    }
];

const EXTRAS = [
    {
        title: 'Daikon and carrots',
        price: '0.75'
    },
    {
        title: 'Meat',
        price: '2.00'
    },
    {
        title: 'Tofu Puff',
        price: '2.00'
    }
];

const Baguette = () => {
    return (
        <div id="baguette">
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Baguette (Bánh Mì)</div>
                    <div className="column is-2">$7.49</div>
                </div>
                <p className="is-description">
                    Crunchy Baguette, Meat or Tofu Puffs, Mayonnaise, Pickled Daikon, Carrots and Cilantro.
                </p>
            </div>

            <StyledWrapper>
                {BAGUETTES.map(item => (
                    <div className="has-margin-bottom">{item.title}</div>
                ))}

                <div className="has-text-right">
                    <div>Extra</div>
                    <Extra extras={EXTRAS} />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Baguette;
