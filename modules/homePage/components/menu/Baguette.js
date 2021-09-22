import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Extra, useCoreServices } from '../../../core';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Baguette = ({ baguetteData, baguetteExtraData }) => {
    const { formatAmount } = useCoreServices();

    return (
        <div>
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Baguette (Bánh Mì)</div>
                    <div className="column is-2">${formatAmount(baguetteData?.[0]?.price)}</div>
                </div>
                <p className="is-description">
                    Crunchy Baguette, Meat or Tofu Puffs, Mayonnaise, Pickled Daikon, Carrots and Cilantro.
                </p>
            </div>

            <StyledWrapper>
                {baguetteData.slice(1).map(item => (
                    <div className="has-margin-bottom">{item.name}</div>
                ))}

                <div className="has-text-right">
                    <div>Extra</div>
                    <Extra extras={baguetteExtraData} />
                </div>
            </StyledWrapper>
        </div>
    );
};

Baguette.propTypes = {
    baguetteData: PropTypes.array,
    baguetteExtraData: PropTypes.array
};

Baguette.defaultProps = {
    baguetteData: [],
    baguetteExtraData: []
};

export default Baguette;
