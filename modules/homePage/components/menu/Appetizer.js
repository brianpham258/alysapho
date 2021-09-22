import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useCoreServices } from '../../../core';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Appetizer = ({ saladRollData, slicedSaladData, beefJerkyData }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">Appetizers (Khai Vị)</div>
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">{saladRollData?.[0]?.name}</div>
                <div className="column is-1 is-description">${formatAmount(saladRollData?.[0]?.price)}</div>
            </StyledTitleMenu>

            <StyledWrapper>
                {saladRollData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}
            </StyledWrapper>

            <div className="same-section-divider">
                <hr />
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">{slicedSaladData?.[0]?.name}</div>
                <div className="column is-1 is-description">${formatAmount(slicedSaladData?.[0]?.price)}</div>
            </StyledTitleMenu>

            <StyledWrapper>
                {slicedSaladData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}
            </StyledWrapper>

            <div className="same-section-divider">
                <hr />
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">{beefJerkyData?.[0]?.name}</div>
                <div className="column is-1 is-description">${formatAmount(beefJerkyData?.[0]?.price)}</div>
            </StyledTitleMenu>

            <StyledWrapper>
                {beefJerkyData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}
            </StyledWrapper>
        </div>
    );
};

Appetizer.propTypes = {
    saladRollData: PropTypes.array,
    slicedSaladData: PropTypes.array,
    beefJerkyData: PropTypes.array
};
Appetizer.defaultProps = {
    saladRollData: [],
    slicedSaladData: [],
    beefJerkyData: []
};

export default Appetizer;
