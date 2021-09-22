import React from 'react';

import {
    BaguetteContainer,
    NoodleContainer,
    SpecialContainer,
    AppetizerContainer,
    VermicelliContainer,
    RiceContainer,
    VegetarianContainer,
    BeverageContainer
} from '../containers';

const MenuContent = () => {
    return (
        <div>
            <div className="is-page-title" id="baguette">
                OUR MENU
            </div>

            <BaguetteContainer />

            <div className="divider" id="noodle">
                <hr />
            </div>

            <NoodleContainer />

            <div className="divider" id="special">
                <hr />
            </div>

            <SpecialContainer />

            <div className="divider" id="appetizer">
                <hr />
            </div>

            <AppetizerContainer />

            <div className="divider" id="vermicelli">
                <hr />
            </div>

            <VermicelliContainer />

            <div className="divider" id="rice">
                <hr />
            </div>

            <RiceContainer />

            <div className="divider" id="vegetarian">
                <hr />
            </div>

            <VegetarianContainer />

            <div className="divider" id="beverage">
                <hr />
            </div>

            <BeverageContainer />
        </div>
    );
};

export default MenuContent;
