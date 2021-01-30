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

const Appetizer = () => {
    return (
        <div id="appetizer">
            <div className="menu-title-section">
                <div className="is-menu-title">Appetizers (Khai Vị)</div>
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">Two Salad Rolls Served with Fish or Coconut Sauce</div>
                <div className="column is-1 is-description">$6.95</div>
            </StyledTitleMenu>

            <StyledWrapper>
                <div className="has-margin-bottom">201. Pork & Shrimp (Gỏi Cuốn)</div>
                <div className="has-margin-bottom">202. Grilled Pork Sausage (Nem Cuốn)</div>
                <div className="has-margin-bottom">203. Fish Sausage (Cá Cuốn)</div>
                <div className="has-margin-bottom">204. Grilled Lemongrass Beef (Bò Cuốn)</div>
                <div className="has-margin-bottom">205. Grilled Lemongrass Pork (Heo Cuốn)</div>
                <div className="has-margin-bottom">206. Grilled Lemongrass Chicken (Gà Cuốn)</div>
                <div className="has-margin-bottom">207. Deep Fried Spring Roll (Chả Giò)</div>
            </StyledWrapper>

            <div className="same-section-divider">
                <hr />
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">Fresh Fine Sliced Cabbage Salad</div>
                <div className="column is-1 is-description">$9.95</div>
            </StyledTitleMenu>

            <StyledWrapper>
                <div className="has-margin-bottom">208. Pork & Shrimp</div>
                <div className="has-margin-bottom">209. Grilled Lemongrass Pork</div>
                <div className="has-margin-bottom">210. Grilled Lemongrass Chicken</div>
                <div className="has-margin-bottom">211. Grilled Lemongrass Beef</div>
            </StyledWrapper>

            <div className="same-section-divider">
                <hr />
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">Beef Jerky</div>
                <div className="column is-1 is-description">$7.00</div>
            </StyledTitleMenu>

            <StyledWrapper>
                <div className="has-margin-bottom">212. Beef Jerky</div>
            </StyledWrapper>
        </div>
    );
};

export default Appetizer;
