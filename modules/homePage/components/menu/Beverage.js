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

const Beverage = ({ beverageData, bobaData, bobaExtras }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">Beverages (Giải Khát)</div>
            </div>

            <StyledWrapper>
                {beverageData.map(item => (
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>{item.name}</div>
                        <div>${formatAmount(item.price)}</div>
                    </StyledTitleMenu>
                ))}

                <div className="same-section-divider" id="boba">
                    <hr />
                </div>

                <div>
                    {bobaData.map(item => (
                        <StyledTitleMenu className="has-margin-bottom">
                            <div>{item.name}</div>
                            <div>${formatAmount(item.price)}</div>
                        </StyledTitleMenu>
                    ))}
                </div>

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <Extra extras={bobaExtras} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Beverage.propTypes = {
    beverageData: PropTypes.array,
    bobaData: PropTypes.array,
    bobaExtras: PropTypes.array
};

Beverage.defaultProps = {
    beverageData: [],
    bobaData: [],
    bobaExtras: []
};

export default Beverage;
