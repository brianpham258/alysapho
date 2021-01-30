import React from 'react';
import styled from 'styled-components';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Vegetarian = () => {
    return (
        <div id="vegetarian">
            <div className="menu-title-section">
                <div className="is-menu-title">Vegetarian (Chay)</div>
            </div>

            <StyledWrapper>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>301. Vegetarian Spring Roll (2 Rolls)</div>
                    <div>$6.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>302. Vegetarian Salad Roll w/Tofu Puffs (2 Rolls)</div>
                    <div>$6.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>303. Vegetarian Noodle w/Tofu Puffs (Soya Sauce)</div>
                    <div>$13.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>304. Vegetarian Noodle w/Tofu Puffs (In Soup)</div>
                    <div>$13.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>305. Vegetarian Vermicelli w/Tofu Puffs & Spring Roll</div>
                    <div>$13.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>306. Vegetarian Rice w/Tofu Puffs & Mix Vegetables</div>
                    <div>$13.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>307. Spicy Vegetarian Noodle Soup w/Tofu Puffs</div>
                    <div>$13.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>308. Spicy Vegetarian Rice with BBQ Soya</div>
                    <div>$13.95</div>
                </StyledTitleMenu>

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <div>Tofu Puffs &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                    <div>Spring Roll &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.50</div>
                    <div>Vegetables &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Vegetarian;
