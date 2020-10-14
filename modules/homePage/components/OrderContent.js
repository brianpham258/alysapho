import React from 'react';
import { Row, Col } from 'antd';

const OrderContent = () => {
    return (
        <>
            <div className="is-page-title" id="order">ORDER</div>
            <Row className="has-text-center">
                <Col>
                    <a href="https://www.skipthedishes.com/">
                        <img src="/skip.jpeg" alt="Skip The Dishes" style={{ width: '30%' }} />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.ubereats.com/">
                        <img src="/uber_eats.jpg" alt="Uber Eats" style={{ width: '30%' }} />
                    </a>
                </Col>
            </Row>
        </>
    );
};

export default OrderContent;
