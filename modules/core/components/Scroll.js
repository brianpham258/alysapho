import React from 'react';
import styled from 'styled-components';
import { UpCircleOutlined } from '@ant-design/icons';

const StyledButtonWrapper = styled.div`
    position: fixed;
    right: 30px;
    bottom: 20px;
    z-index: 99;
    cursor: pointer;
`;

const Scroll = () => {
    const handleUpOnClick = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <StyledButtonWrapper>
            <UpCircleOutlined onClick={() => handleUpOnClick()} style={{ fontSize: 30 }} />
        </StyledButtonWrapper>
    );
};

export default Scroll;
