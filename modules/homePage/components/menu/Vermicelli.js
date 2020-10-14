import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Vermicelli = () => {
    return (
        <div id="vermicelli">
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Vermicelli (Bún)</div>
                    <div className="column is-2">$13.95</div>
                </div>
                <div className="is-description">
                    Served with lettuce, bean sprouts, cucumbers, green onion oil and fish sauce
                </div>
            </div>

            <StyledWrapper>
                <div className="has-margin-bottom">
                    701. Grilled Lemongrass Pork and Spring Roll (Bún Heo Nướng, Chả Giò)
                </div>
                <div className="has-margin-bottom">
                    702. Grilled Lemongrass Chicken and Spring Roll (Bún Gà Nướng, Chả Giò)
                </div>
                <div className="has-margin-bottom">
                    703. Grilled Lemongrass Beef and Spring Roll (Bún Bò Nướng, Chả Giò)
                </div>
                <div className="has-margin-bottom">
                    704. Grilled Pork Sausage and Spring Roll (Bún Nem Nướng, Chả Giò)
                </div>

                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <div>Meat or Sausage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Vegetable &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Spring Roll &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.50</div>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Vermicelli;
