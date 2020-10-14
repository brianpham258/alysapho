import React from 'react';

import Baguette from './menu/Baguette';
import Noodle from './menu/Noodle';
import Special from './menu/Special';
import Appetizer from './menu/Appetizer';
import Vermicelli from './menu/Vermicelli';
import Rice from './menu/Rice';
import Vegetarian from './menu/Vegetarian';
import Beverages from './menu/Beverage';

const MenuContent = () => {
    return (
        <div id="menu">
            <Baguette />
            <div className="divider">
                <hr />
            </div>
            <Noodle />
            <div className="same-section-divider">
                <hr />
            </div>
            <Special />
            <div className="divider">
                <hr />
            </div>
            <Appetizer />
            <div className="divider">
                <hr />
            </div>
            <Vermicelli />
            <div className="divider">
                <hr />
            </div>
            <Rice />
            <div className="divider">
                <hr />
            </div>
            <Vegetarian />
            <div className="divider">
                <hr />
            </div>
            <Beverages />
        </div>
    );
};

export default MenuContent;
