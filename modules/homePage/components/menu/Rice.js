import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Extra, useCoreServices } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const RICES = [
    {
        title: '801. Grilled Lemongrass Pork Chop and Pork Meatloaf (Cơm Sườn, Chả Trứng)'
    },
    {
        title: '802. Grilled Lemongrass Pork Chop and Fried Egg (Cơm Sườn, Trứng Ốp La)'
    },
    {
        title: '803. Grilled Lemongrass Chicken and Pork Meatloaf (Cơm Gà Nướng, Chả Trứng)'
    },
    {
        title: '804. Grilled Lemongrass Chicken and Fried Egg (Cơm Gà Nướng, Trứng Ốp La)'
    },
    {
        title: '805. Grilled Lemongrass Beef and Pork Meatloaf (Cơm Bò Nướng, Chả Trứng)'
    },
    {
        title: '806. Grilled Lemongrass Beef and Fried Egg (Cơm Bò Nướng, Trứng Ốp La)'
    }
];

const EXTRAS = [
    {
        title: 'Meat',
        price: '3.00'
    },
    {
        title: 'Sausage',
        price: '3.00'
    },
    {
        title: 'Fried Egg',
        price: '2.00'
    },
    {
        title: 'Rice',
        price: '2.00'
    },
    {
        title: 'Steam Rice (Side order)',
        price: '3.00'
    }
];

const Rice = ({ riceData, riceExtraData }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Rice Plates (Cơm)</div>
                    <div className="column is-2">${formatAmount(riceData?.[0]?.price)}</div>
                </div>
                <p className="is-description">Served with rice, lettuce, green onion oil and fish sauce</p>
            </div>

            <StyledWrapper>
                {riceData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <Extra extras={riceExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Rice.propTypes = {
    riceData: PropTypes.array,
    riceExtraData: PropTypes.array
};

Rice.defaultProps = {
    riceData: [],
    riceExtraData: []
};

export default Rice;
