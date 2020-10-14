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

const Beverage = () => {
    return (
        <div id="beverage">
            <div className="menu-title-section">
                <div className="is-menu-title">Beverages (Giải Khát)</div>
            </div>

            <StyledWrapper>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>601. Spring water bottle (Nước Suối Chai)</div>
                    <div>$1.00</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>602. Soft Drink (Nước Ngọt)</div>
                    <div>$2.00</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>603. Sparking Fruit Juice (Nước Trái Cây)</div>
                    <div>$3.00</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>604. Hot Coffee (Cà Phê Nóng)</div>
                    <div>$4.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>605. Iced Coffee (Cà Phê Đá)</div>
                    <div>$4.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>606. Hot Coffee w/Milk (Cà Phê Sữa Nóng)</div>
                    <div>$4.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>607. Iced Coffee ư/Milk (Cà Phê Sữa Đá)</div>
                    <div>$4.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>608. Fresh Lemonade (Nước Chanh Tươi)</div>
                    <div>$4.00</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>609. Coconut Juice (Nước Dừa Tươi)</div>
                    <div>$5.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>610. Tri-Colour Bean and Coco Milk (Chè Ba Màu)</div>
                    <div>$5.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>611. Red Bean and Coco Milk (Đậu Đỏ Cốt Dừa)</div>
                    <div>$5.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>612. Green Bean and Coco Milk</div>
                    <div>$5.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>
                        613. Lychee or Logan Jelly in Logan Syrup on Ice (Thạch trái vải hoặc trái nhãn, nước nhãn nhục)
                    </div>
                    <div>$5.75</div>
                </StyledTitleMenu>
                <StyledTitleMenu className="has-margin-bottom">
                    <div>614. Water chestnut pearl, jelly, mung bean w/coco milk (Sương sa hạt lựu cốt dừa)</div>
                    <div>$5.75</div>
                </StyledTitleMenu>
            </StyledWrapper>
        </div>
    );
};

export default Beverage;
