import React from 'react';
import styled from 'styled-components';

import { Extra } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const PRICES = [
    {
        title: 'Regular Size',
        price: '13.49',
        className: 'column is-one-quarter'
    },
    {
        title: 'Large Size',
        price: '15.49',
        className: 'column is-one-quarter'
    }
];

const NOODLES = [
    {
        title: '401. Rare Beef, Brisket, Tendon and Beef balls (Phở Đặc Biệt)'
    },
    {
        title: '402. Sliced Rare Beef (Phở Tái)'
    },
    {
        title: '403. Brisket (Well-done Beef) (Phở Chín)'
    },
    {
        title: '404. Sliced Rare Beef and Brisket (Phở Tái, Chín)'
    },
    {
        title: '405. Sliced Rare Beef, Brisket, and Tendon (Phở Tái, Chín, Gân)'
    },
    {
        title: '406. Sliced Rare Beef, Brisket, and Beef balls (Phở Tái, Chín, Bò Viên)'
    },
    {
        title: '407. Beef balls (Phở Bò Viên)'
    },
    {
        title: '408. Sliced Rare Beef and Beef balls (Phở Tái, Bò Viên)'
    },
    {
        title: '409. Brisket and Beef balls (Phở Chín, Bò Viên)'
    },
    {
        title: '410. Sliced Rare Beef and Tendon (Phở Tái Gân)'
    },
    {
        title: '411. Brisket and Tendon (Phở Chín Gân)'
    },
    {
        title: '412. Sliced Rare Beef, Tendon, and Beef balls (Phở Tái, Gân, Bò Viên)'
    },
    {
        title: '413. Brisket, Tendon, and Beef balls (Phở Chín, Gân, Bò Viên)'
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
        <div>
            <div className="menu-title-section">
                <p className="is-menu-title">Beef Noodle Soup (Phở)</p>
                <p className="is-description has-margin-bottom">
                    Served with Bean Sprouts, Fresh Basil, Limes, and Jalapenos.
                </p>
                <div className="columns is-desktop is-description">
                    {PRICES.map(item => {
                        const { title, price, className, extra } = item;
                        return extra ? (
                            <div className={className}>
                                {title}: ${price} (${extra.price} {extra.title})
                            </div>
                        ) : (
                            <div className={className}>
                                {title}: ${price}
                            </div>
                        );
                    })}
                </div>
            </div>

            <StyledWrapper>
                {NOODLES.map(item => (
                    <div className="has-margin-bottom">{item.title}</div>
                ))}

                <div className="has-text-right">
                    <div>Add-On</div>
                    <Extra extras={EXTRAS} />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Noodle;
