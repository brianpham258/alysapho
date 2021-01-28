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
            <div className="is-page-title" id="baguette">
                OUR MENU
            </div>
            <Baguette />
            <div className="divider" id="noodle">
                <hr />
            </div>
            <Noodle />
            <div className="divider" id="special">
                <hr />
            </div>
            <Special />
            <div className="divider" id="appetizer">
                <hr />
            </div>
            <Appetizer />
            <div className="divider" id="vermicelli">
                <hr />
            </div>
            <Vermicelli />
            <div className="divider" id="rice">
                <hr />
            </div>
            <Rice />
            <div className="divider" id="vegetarian">
                <hr />
            </div>
            <Vegetarian />
            <div className="divider" id="beverage">
                <hr />
            </div>
            <Beverages />
        </div>
    );
};

export default MenuContent;
