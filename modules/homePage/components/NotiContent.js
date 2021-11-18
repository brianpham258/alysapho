import React from 'react';
import styled from 'styled-components';
import { InfoCircleFilled } from '@ant-design/icons';

const StyledContent = styled.div`
    text-align: center;
    font-size: 20px;
    max-width: 500px;
    margin: auto;
`;

const NotiContent = () => {
    return (
        <div id="noti" className="container">
            <div className="is-page-title">Alysa&apos;s Pho & Banh Mi</div>
            <div className="is-page-title">TAKE-OUT ONLY DURING COVID-19</div>
            <div className="is-page-title">WE ACCEPT CASH AND DEBIT</div>
            <hr />
            <div className="is-page-title" style={{ color: '#1c94fe' }}>
                <InfoCircleFilled /> PRICE CHANGE NOTICE <InfoCircleFilled />
            </div>
            <StyledContent>
                <div>
                    Please note that effective the 23th of November 2021 there will be a price change on our menu due to
                    the increased costs from our suppliers.
                </div>
                <div className="mt-16">
                    We did everything we could to avoid raising the price, but the situation has continued.
                </div>
                <div className="mt-16">
                    We greatly appreciate you business and hope you will understand our need to implement this increase.
                </div>
                <div className="mt-16">Many thanks.</div>
            </StyledContent>
        </div>
    );
};

export default NotiContent;
