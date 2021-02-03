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

const ROLLS = [
    {
        title: '201. Pork & Shrimp (Gỏi Cuốn)'
    },
    {
        title: '202. Grilled Pork Sausage (Nem Cuốn)'
    },
    {
        title: '203. Fish Sausage (Cá Cuốn)'
    },
    {
        title: '204. Grilled Lemongrass Beef (Bò Cuốn)'
    },
    {
        title: '205. Grilled Lemongrass Pork (Heo Cuốn)'
    },
    {
        title: '206. Grilled Lemongrass Chicken (Gà Cuốn)'
    },
    {
        title: '207. Deep Fried Spring Roll (Chả Giò)'
    }
];

const SALADS = [
    {
        title: '208. Pork & Shrimp'
    },
    {
        title: '209. Grilled Lemongrass Pork'
    },
    {
        title: '210. Grilled Lemongrass Chicken'
    },
    {
        title: '211. Grilled Lemongrass Beef'
    }
];

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
                {ROLLS.map(item => (
                    <div className="has-margin-bottom">{item.title}</div>
                ))}
            </StyledWrapper>

            <div className="same-section-divider">
                <hr />
            </div>

            <StyledTitleMenu className="columns is-desktop has-margin-bottom">
                <div className="column is-description">Fresh Fine Sliced Cabbage Salad</div>
                <div className="column is-1 is-description">$9.95</div>
            </StyledTitleMenu>

            <StyledWrapper>
                {SALADS.map(item => (
                    <div className="has-margin-bottom">{item.title}</div>
                ))}
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
