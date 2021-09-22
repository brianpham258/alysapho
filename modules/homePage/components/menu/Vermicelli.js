import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Extra, useCoreServices } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Vermicelli = ({ vermicelliData, vermicelliExtraData }) => {
    const { formatAmount } = useCoreServices();
    return (
        <div>
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Vermicelli (Bún)</div>
                    <div className="column is-2">${formatAmount(vermicelliData?.[0]?.price)}</div>
                </div>
                <div className="is-description">
                    Served with lettuce, bean sprouts, cucumbers, green onion oil and fish sauce
                </div>
            </div>

            <StyledWrapper>
                {vermicelliData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <Extra extras={vermicelliExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Vermicelli.propTypes = {
    vermicelliData: PropTypes.array,
    vermicelliExtraData: PropTypes.array
};

Vermicelli.defaultProps = {
    vermicelliData: [],
    vermicelliExtraData: []
};

export default Vermicelli;
