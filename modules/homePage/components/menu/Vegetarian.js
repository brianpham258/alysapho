import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Extra, useCoreServices } from '../../../core';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Vegetarian = ({ vegetarianData, vegetarianExtraData }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">Vegetarian (Chay)</div>
            </div>

            <StyledWrapper>
                {vegetarianData.map(item => (
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>{item.name}</div>
                        <div>${formatAmount(item.price)}</div>
                    </StyledTitleMenu>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <Extra extras={vegetarianExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Vegetarian.propTypes = {
    vegetarianData: PropTypes.array,
    vegetarianExtraData: PropTypes.array
};

Vegetarian.defaultProps = {
    vegetarianData: [],
    vegetarianExtraData: []
};

export default Vegetarian;
