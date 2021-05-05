import React from 'react';
import styled from 'styled-components';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const BEVERAGES = [
    {
        title: '601. Spring Water Bottle (Nước Suối Chai)',
        price: '1.00'
    },
    {
        title: '602. Soft Drink (Nước Ngọt)',
        price: '2.00'
    },
    {
        title: '603. Sparking Fruit Juice (Nước Trái Cây)',
        price: '3.00'
    },
    {
        title: '604. Hot Coffee (Cà Phê Nóng)',
        price: '4.75'
    },
    {
        title: '605. Iced Coffee (Cà Phê Đá)',
        price: '4.75'
    },
    {
        title: '606. Hot Coffee w/Milk (Cà Phê Sữa Nóng)',
        price: '4.75'
    },
    {
        title: '607. Iced Coffee w/Milk (Cà Phê Sữa Đá)',
        price: '4.75'
    },
    {
        title: '608. Fresh Lemonade (Nước Chanh Tươi)',
        price: '4.00'
    },
    {
        title: '609. Coconut Juice (Nước Dừa Tươi)',
        price: '5.75'
    },
    {
        title: '610. Tri-Colour Bean and Coco Milk (Chè Ba Màu)',
        price: '5.75'
    },
    {
        title: '611. Red Bean and Coco Milk (Đậu Đỏ Cốt Dừa)',
        price: '5.75'
    },
    {
        title: '612. Green Bean and Coco Milk (Đậu Xanh Cốt Dừa)',
        price: '5.75'
    },
    {
        title: '613. Lychee or Logan Jelly in Logan Syrup on Ice (Thạch trái vải hoặc trái nhãn, nước nhãn nhục)',
        price: '5.75'
    },
    {
        title: '614. Water Chestnut Pearl, Jelly, Mung Bean w/Coco Milk (Sương sa hạt lựu cốt dừa)',
        price: '5.75'
    }
];

const BOBA = [
    {
        title: '615. Taro Bubble Tea (Trà Sữa Trân Châu Khoai Môn)',
        price: '4.50'
    },
    {
        title: '616. Mango Bubble Tea (Trà Sữa Trân Châu Xoài)',
        price: '4.50'
    },
    {
        title: '617. Cinnamon Apple Bubble Tea (Trà Sữa Trân Châu Táo)',
        price: '4.50'
    },
    {
        title: '618. Lychee Bubble Tea (Trà Sữa Trân Châu Vải)',
        price: '4.50'
    }
];

const Beverage = () => {
    return (
        <div>
            <div className="menu-title-section">
                <div className="is-menu-title">Beverages (Giải Khát)</div>
            </div>

            <StyledWrapper>
                {BEVERAGES.map(item => (
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                    </StyledTitleMenu>
                ))}

                <div className="same-section-divider" id="boba">
                    <hr />
                </div>

                <div>
                    {BOBA.map(item => (
                        <StyledTitleMenu className="has-margin-bottom">
                            <div>{item.title}</div>
                            <div>${item.price}</div>
                        </StyledTitleMenu>
                    ))}
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Beverage;
