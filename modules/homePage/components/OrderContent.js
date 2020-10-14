import React from 'react';

const OrderContent = () => {
    return (
        <>
            <div className="is-page-title" id="order">
                ORDER
            </div>
            <div className="columns has-text-center">
                <div className="column">
                    <a href="https://www.skipthedishes.com/" target="_blank" rel="noreferrer">
                        <img src="/skip.jpeg" alt="Skip The Dishes" style={{ width: '30%' }} />
                    </a>
                </div>
                <div className="column">
                    <a
                        href="https://www.ubereats.com/ca/victoria/food-delivery/alysas-pho-and-banh-mi-restaurant/sFJ15DjeRD2Cpen_0Q2c0g"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/uber_eats.jpg" alt="Uber Eats" style={{ width: '30%' }} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default OrderContent;
