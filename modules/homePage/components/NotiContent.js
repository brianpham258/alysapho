import React from 'react';
import styled from 'styled-components';
import { InfoCircleFilled } from '@ant-design/icons';

const StyledContent = styled.div`
    text-align: center;
    font-size: 24px;
    margin: auto;
    font-weight: bold;
`;

const NotiContent = () => {
    return (
        <div id="noti" className="container">
            <div className="is-page-title">Alysa&apos;s Pho & Banh Mi</div>
            <div className="is-page-title">TAKE-OUT ONLY DURING COVID-19</div>
            <div className="is-page-title">WE ACCEPT CASH AND DEBIT</div>
            {/* <hr />
            <div className="is-page-title" style={{ color: '#1c94fe' }}>
                <InfoCircleFilled /> HOLIDAY HOURS NOTICE <InfoCircleFilled />
            </div>
            <StyledContent>
                <div>We are closed from 25 Dec 2021 to 3 January 2022 and reopen 4 January 2022</div>
            </StyledContent> */}
        </div>
    );
};

export default NotiContent;
