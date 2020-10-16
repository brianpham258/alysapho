import React from 'react';

const OrderContent = () => {
    return (
        <>
            <div className="is-page-title" id="order">
                ORDER
            </div>
            <div className="columns has-text-center">
                <div className="column">
                    <a
                        href="https://www.skipthedishes.com/alysas-pho-and-banh-mi-quadra-street"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/skip.jpeg" alt="Skip The Dishes" style={{ width: '30%' }} />
                    </a>
                </div>
                <div className="column">
                    <a href="https://fantuan.ca/delivery/en/" target="_blank" rel="noreferrer">
                        <img src="/fantuan.png" alt="Uber Eats" style={{ width: '30%' }} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default OrderContent;
