import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Special = ({ specialNoodleData, noodleExtraData }) => {
    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">House Specialty Noodle</div>
            </div>

            <StyledWrapper>
                {specialNoodleData.map(item => (
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>{item.name}</div>
                        <div>${item.price}</div>
                    </StyledTitleMenu>
                ))}

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <Extra extras={noodleExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Special.propTypes = {
    specialNoodleData: PropTypes.array,
    noodleExtraData: PropTypes.array
};

Special.defaultProps = {
    specialNoodleData: [],
    noodleExtraData: []
};

export default Special;
