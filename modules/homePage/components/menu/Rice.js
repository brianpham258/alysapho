import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Rice = () => {
    return (
        <div id="rice">
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Rice Plates (Cơm)</div>
                    <div className="column is-2">$13.95</div>
                </div>
                <p className="is-description">Served with rice, lettuce, green onion oil and fish sauce</p>
            </div>

            <StyledWrapper>
                <div className="has-margin-bottom">
                    801. Grilled Lemongrass Pork Chop and Pork Meatloaf (Cơm Sườn, Chả Trứng)
                </div>
                <div className="has-margin-bottom">
                    802. Grilled Lemongrass Pork Chop and Fried Egg (Cơm Sườn, Trứng Ốp La)
                </div>
                <div className="has-margin-bottom">
                    803. Grilled Lemongrass Chicken and Pork Meatloaf (Cơm Gà Nướng, Chả Trứng)
                </div>
                <div className="has-margin-bottom">
                    804. Grilled Lemongrass Chicken and Fried Egg (Cơm Gà Nướng, Trứng Ốp La)
                </div>
                <div className="has-margin-bottom">
                    805. Grilled Lemongrass Beef and Pork Meatloaf (Cơm Bò Nướng, Chả Trứng)
                </div>
                <div className="has-margin-bottom">
                    806. Grilled Lemongrass Beef and Fried Egg (Cơm Bò Nướng, Trứng Ốp La)
                </div>

                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <div>Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Sausage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    <div>Fried Egg &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                    <div>Rice &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                    <div>Steam Rice (Side order) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Rice;
