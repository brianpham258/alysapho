import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useCoreServices from '../services/useCoreServices';

const StyledExtraWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Extra = ({ extras }) => {
    const { formatAmount } = useCoreServices();

    return (
        <>
            {extras.map(item => (
                <StyledExtraWrapper>
                    <div className="mr-64">{item.name}</div>
                    <div>${formatAmount(item.price)}</div>
                </StyledExtraWrapper>
            ))}
        </>
    );
};

Extra.propTypes = {
    extras: PropTypes.array
};

Extra.defaultProps = {
    extras: []
};

export default Extra;
