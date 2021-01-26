import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledExtraWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Extra = ({ extras }) => (
    <>
        {extras.map(item => (
            <StyledExtraWrapper>
                <div className="mr-64">{item.title}</div>
                <div>${item.price}</div>
            </StyledExtraWrapper>
        ))}
    </>
);

Extra.propTypes = {
    extras: PropTypes.array
};

Extra.defaultProps = {
    extras: []
};

export default Extra;
