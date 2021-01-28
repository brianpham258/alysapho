import React, { useState } from 'react';

const NavbarContent = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="navbar is-fixed-top" role="navigation" arial-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="/logocolored254.png" alt="Alysa's Pho & Banh Mi" width="70" height="30" />
                </a>
                <a aria-label="menu" aria-expanded="false" className="navbar-burger burger" onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </a>
            </div>

            <div className={menuVisible ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-start" style={{ height: '100%' }}>
                    <a className="navbar-item" href="#home">
                        Home
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="#baguette">
                            Menu
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="#baguette">
                                Baguette
                            </a>
                            <a className="navbar-item" href="#noodle">
                                Beef Noodle Soup
                            </a>
                            <a className="navbar-item" href="#special">
                                House Specialty Noodle
                            </a>
                            <a className="navbar-item" href="#appetizer">
                                Appetizers
                            </a>
                            <a className="navbar-item" href="#vermicelli">
                                Vermicelli
                            </a>
                            <a className="navbar-item" href="#rice">
                                Rice Plates
                            </a>
                            <a className="navbar-item" href="#vegetarian">
                                Vegetarian
                            </a>
                            <a className="navbar-item" href="#beverage">
                                Beverages
                            </a>
                            <a className="navbar-item" href="#boba">
                                Boba Tea
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item" href="#order">
                        Order
                    </a>
                    <a className="navbar-item" href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarContent;
