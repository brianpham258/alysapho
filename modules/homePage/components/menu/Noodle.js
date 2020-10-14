import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Noodle = () => {
    return (
        <div id="noodle">
            <div className="menu-title-section">
                <p className="is-menu-title">Beef Noodle Soup (Phở)</p>
                <p className="is-description has-margin-bottom">
                    Served with Bean Sprouts, Fresh Basil, Limes, and Jalapenos.
                </p>
                <div className="columns is-desktop is-description">
                    <div className="column is-one-quarter">Regular Size: $13.49</div>
                    <div className="column is-one-quarter">Large Size: $15.49</div>
                    <div className="column">Kids Size: $8.95 ($2.00 Bean Sprout and Basil)</div>
                </div>
            </div>

            <StyledWrapper>
                <div className="has-margin-bottom">401. Rare Beef, Brisket, Tendon and Beef balls (Phở Đặc Biệt)</div>
                <div className="has-margin-bottom">402. Sliced Rare Beef (Phở Tái)</div>
                <div className="has-margin-bottom">403. Brisket (Well-done Beef) (Phở Chín)</div>
                <div className="has-margin-bottom">404. Sliced Rare Beef and Brisket (Phở Tái, Chín)</div>
                <div className="has-margin-bottom">405. Sliced Rare Beef, Brisket, and Tendon (Phở Tái, Chín, Gân)</div>
                <div className="has-margin-bottom">
                    406. Sliced Rare Beef, Brisket, and Beef balls (Phở Tái, Chín, Bò Viên)
                </div>
                <div className="has-margin-bottom">407. Beef balls (Phở Bò Viên)</div>
                <div className="has-margin-bottom">408. Sliced Rare Beef and Beef balls (Phở Tái, Bò Viên)</div>
                <div className="has-margin-bottom">409. Brisket and Beef balls (Phở Chín, Bò Viên)</div>
                <div className="has-margin-bottom">410. Sliced Rare Beef and Tendon (Phở Tái Gân)</div>
                <div className="has-margin-bottom">411. Brisket and Tendon (Phở Chín Gân)</div>
                <div className="has-margin-bottom">
                    412. Sliced Rare Beef, Tendon, and Beef balls (Phở Tái, Gân, Bò Viên)
                </div>
                <div className="has-margin-bottom">413. Brisket, Tendon, and Beef balls (Phở Chín, Gân, Bò Viên)</div>
            </StyledWrapper>
        </div>
    );
};

export default Noodle;
