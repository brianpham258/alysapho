import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Extra, useCoreServices } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Noodle = ({ noodleData, noodleSizeData, noodleExtraData }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <p className="is-menu-title">Beef Noodle Soup (Phở)</p>
                <p className="is-description has-margin-bottom">
                    Served with Bean Sprouts, Fresh Basil, Limes, and Jalapenos.
                </p>
                <div className="columns is-desktop is-description">
                    {noodleSizeData.map(item => (
                        <div className="column is-two-quarter">
                            {item.name}: ${formatAmount(item.price)}
                        </div>
                    ))}
                </div>
            </div>

            <StyledWrapper>
                {noodleData.map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}

                <div className="has-text-right">
                    <div>Add-On</div>
                    <Extra extras={noodleExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Noodle.propTypes = {
    noodleData: PropTypes.array,
    noodleSizeData: PropTypes.array,
    noodleExtraData: PropTypes.array
};

Noodle.defaultProps = {
    noodleData: [],
    noodleSizeData: [],
    noodleExtraData: []
};

export default Noodle;
