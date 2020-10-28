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

const Noodle = () => {
    return (
        <div id="special">
            <div className="menu-title-section">
                <div className="is-menu-title">House Specialty Noodle</div>
            </div>

            <StyledWrapper>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>501. Spicy, Lemongrass Beef and Pork Noodle in Soup (Bún Bò Huế)</div>
                    <div>$14.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>502. Chicken, Noodle in Soup (Phở Gà)</div>
                    <div>$14.95</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>503. Seafood Noodle in Soup</div>
                    <div>$14.95</div>
                </StyledTitleMenu>

                <div className="has-margin-bottom has-text-right">
                    <div>Add-On</div>
                    <div>Bean Sprouts and Basil &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                    <div>Broccoli, Carrot, Rutabaga and Cabbage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Meats &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Spicy Broth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.75</div>
                    <div>Extra Broth 32oz &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $4.49</div>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Noodle;
