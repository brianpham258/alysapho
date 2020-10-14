import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledTitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const MenuContent = () => {
    return (
        <Row id="menu" gutter={8}>
            <Col id="baguette">
                <div className="menu-title-section">
                    <Row className="is-menu-title">
                        <Col md={20}>Baguette (Bánh Mì)</Col>
                        <Col md={4}>$7.49</Col>
                    </Row>
                    <p className="is-description">
                        Crunchy Baguette, Meat or Tofu Puffs, Mayonnaise, Pickled Daikon, Carrots and Cilantro.
                    </p>
                </div>

                <StyledWrapper>
                    <div>101. Alysa&apos;s Classic</div>
                    <div className="has-margin-bottom">(Pâté, Pork Sausage, Headcheese and jambon)</div>
                    <div className="has-margin-bottom">102. BBQ Pork (Xá Xíu)</div>
                    <div className="has-margin-bottom">103. Sausage (Nem Nướng)</div>
                    <div className="has-margin-bottom">104. Grilled Chicken (Gà Nướng)</div>
                    <div className="has-margin-bottom">105. Grilled Pork (Heo Nướng)</div>
                    <div className="has-margin-bottom">106. Grilled Beef (Bò Nướng)</div>
                    <div className="has-margin-bottom">107. Shredded Chicked (Gà Chà Bông)</div>
                    <div className="has-margin-bottom">108. Curry Tofu Puffs (Cari Chay)</div>
                    <div className="has-margin-bottom">109. Soya Tofu Puffs (Xì Dầu Chay)</div>
                    <div className="has-margin-bottom">110. Five-Spice Pork (Ngũ Vị Hương)</div>
                    <div className="has-margin-bottom">111. BBQ Soya</div>
                    <div className="has-margin-bottom has-text-right">
                        <Row>
                            <Col>Extra</Col>
                            <Col>Daikon and carrots &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.75</Col>
                        </Row>
                        <div>Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                        <div>Tofu Puff &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $1.00</div>
                    </div>
                </StyledWrapper>
            </Col>

            <div className="divider">
                <hr />
            </div>

            <div id="noodle">
                <div className="menu-title-section">
                    <p className="is-menu-title">Beef Noodle Soup (Phở)</p>
                    <p className="is-description has-margin-bottom">
                        Served with Bean Sprouts, Fresh Basil, Limes, and Jalapenos.
                    </p>
                    <Row className="is-description">
                        <Col>Regular Size: $13.49</Col>
                        <Col>Large Size: $15.49</Col>
                        <Col>Kids Size: $8.95 ($2.00 Bean Sprout and Basil)</Col>
                    </Row>
                </div>

                <StyledWrapper>
                    <div className="has-margin-bottom">
                        401. Rare Beef, Brisket, Tendon and Beef balls (Phở Đặc Biệt)
                    </div>
                    <div className="has-margin-bottom">402. Sliced Rare Beef (Phở Tái)</div>
                    <div className="has-margin-bottom">403. Brisket (Well-done Beef) (Phở Chín)</div>
                    <div className="has-margin-bottom">404. Sliced Rare Beef and Brisket (Phở Tái, Chín)</div>
                    <div className="has-margin-bottom">
                        405. Sliced Rare Beef, Brisket, and Tendon (Phở Tái, Chín, Gân)
                    </div>
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
                    <div className="has-margin-bottom">
                        413. Brisket, Tendon, and Beef balls (Phở Chín, Gân, Bò Viên)
                    </div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

            <div id="special">
                <div className="menu-title-section">
                    <div className="is-menu-title">House Specialty Noodle (Đặc Biệt)</div>
                </div>

                <StyledWrapper>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>501. Spicy, Lemongrass Beef and Pork Noodle in Soup (Bún Bò Huế)</div>
                        <div>$14.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>502. Chicken, Noodle in Soup (Phở Gà)</div>
                        <div>$12.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>503. Seafood Noodle in Soup</div>
                        <div>$14.95</div>
                    </StyledTitleMenu>

                    <div className="has-margin-bottom has-text-right">
                        <Row>
                            <Col md={12}>Add-On</Col>
                            <Col md={12}>Bean Sprouts and Basil &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</Col>
                        </Row>
                        <div>Broccoli, Carrot, Rutabaga and Cabbage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                        <div>Meats (Beef Balls or Tendon) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                        <div>Spicy Broth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.75</div>
                        <div>Extra Broth 32oz &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $4.49</div>
                    </div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

            <div id="appetizer">
                <div className="menu-title-section">
                    <div className="is-menu-title">Appetizers (Khai Vị)</div>
                </div>

                <StyledTitleMenu className="has-margin-bottom">
                    <p className="is-description">2 Salad Rolls Served with Fish or Coconut Sauce</p>
                    <div className="is-description">$6.49</div>
                </StyledTitleMenu>

                <StyledWrapper>
                    <div className="has-margin-bottom">201. Pork & Shrimp (Gỏi Cuốn)</div>
                    <div className="has-margin-bottom">202. Grilled Pork Sausage (Nem Cuốn)</div>
                    <div className="has-margin-bottom">203. Fish Sausage (Cá Cuốn)</div>
                    <div className="has-margin-bottom">204. Grilled Lemongrass Beef (Bò Cuốn)</div>
                    <div className="has-margin-bottom">205. Grilled Lemongrass Prok (Heo Cuốn)</div>
                    <div className="has-margin-bottom">206. Grilled Lemongrass Chicken (Gà Cuốn)</div>
                    <div className="has-margin-bottom">207. Deep Fried Spring Roll (Chả Giò)</div>
                </StyledWrapper>

                <div className="divider">
                    <hr />
                </div>

                <StyledTitleMenu className="has-margin-bottom">
                    <p className="is-description">Fresh Fine Sliced Cabbage Salad</p>
                    <div className="is-description">$9.95</div>
                </StyledTitleMenu>

                <StyledWrapper>
                    <div className="has-margin-bottom">208. Pork & Shrimp</div>
                    <div className="has-margin-bottom">209. Grilled Lemongrass Pork</div>
                    <div className="has-margin-bottom">210. Grilled Lemongrass Chicken</div>
                    <div className="has-margin-bottom">211. Grilled Lemongrass Beef</div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

            <div id="vermicelli">
                <div className="menu-title-section">
                    <Row className="is-menu-title">
                        <Col>Vermicelli (Bún)</Col>
                        <Col>$13.95</Col>
                    </Row>
                    <p className="is-description">
                        Served with lettuce, bean sprouts, cucumbers, green onion oil and fish sauce
                    </p>
                </div>

                <StyledWrapper>
                    <div className="has-margin-bottom">
                        701. Grilled Lemongrass Pork and Spring Roll (Bún Heo Nướng, Chả Giò)
                    </div>
                    <div className="has-margin-bottom">
                        702. Grilled Lemongrass Chicken and Spring Roll (Bún Gà Nướng, Chả Giò)
                    </div>
                    <div className="has-margin-bottom">
                        703. Grilled Lemongrass Beef and Spring Roll (Bún Bò Nướng, Chả Giò)
                    </div>
                    <div className="has-margin-bottom">
                        704. Grilled Pork Sausage and Spring Roll (Bún Nem Nướng, Chả Giò)
                    </div>

                    <div className="has-margin-bottom has-text-right">
                        <Row>
                            <Col>Extra</Col>
                            <Col>Meat or Sausage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</Col>
                        </Row>
                        <div>Vegetable &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                        <div>Spring Roll &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.50</div>
                    </div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

            <div id="rice">
                <div className="menu-title-section">
                    <Row className="is-menu-title">
                        <Col>Rice Plates (Cơm)</Col>
                        <Col>$13.95</Col>
                    </Row>
                    <p className="is-description">Served with rice, lettuce, green onion oil and fish sauce</p>
                </div>

                <StyledWrapper>
                    <div className="has-margin-bottom">
                        801. Grilled Lemongrass Pork Chop and Pork Meatloaf (Cơm Sườn, Chả Trứng)
                    </div>
                    <div className="has-margin-bottom">
                        802. Grilled Lemongrass Pork Chop and Fried Egg (Cơm Sườn, Trứng Ốp La)
                    </div>
                    <div className="has-margin-bottom">
                        803. Grilled Lemongrass Chicken and Pork Meatloaf (Cơm Gà Nướng, Chả Trứng)
                    </div>
                    <div className="has-margin-bottom">
                        804. Grilled Lemongrass Chicken and Fried Egg (Cơm Gà Nướng, Trứng Ốp La)
                    </div>
                    <div className="has-margin-bottom">
                        805. Grilled Lemongrass Beef and Pork Meatloaf (Cơm Bò Nướng, Chả Trứng)
                    </div>
                    <div className="has-margin-bottom">
                        806. Grilled Lemongrass Beef and Fried Egg (Cơm Bò Nướng, Trứng Ốp La)
                    </div>

                    <div className="has-margin-bottom has-text-right">
                        <Row>
                            <Col>Extra</Col>
                            <Col>Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</Col>
                        </Row>
                        <div>Sausage &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                        <div>Fried Egg &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                        <div>Rice &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                        <div>Steam Rice (Side order) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    </div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

            <div id="vegetarian">
                <div className="menu-title-section">
                    <div className="is-menu-title">Vegetarian (Chay)</div>
                </div>

                <StyledWrapper>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>301. Vegetarian Spring Roll (2 Rolls)</div>
                        <div>$6.49</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>302. Vegetarian Salad Roll w/Tofu Puffs (2 Rolls)</div>
                        <div>$6.49</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>303. Vegetarian Noodle w/Tofu Puffs (Soya Sauce)</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>304. Vegetarian Noodle w/Tofu Puffs (In Soup)</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>305. Vegetarian Vermicelli w/Tofu Puffs & Spring Roll</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>306. Vegetarian Rice w/Tofu Puffs & Mix Vegetables</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>307. Spicy Vegetarian Noodle Soup w/Tofu Puffs</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>308. Spicy Vegetarian Rice with BBQ Soya</div>
                        <div>$13.95</div>
                    </StyledTitleMenu>

                    <div className="has-margin-bottom has-text-right">
                        <Row>
                            <Col md={12}>Add-On</Col>
                            <Col md={12}>Tofu Puffs &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</Col>
                        </Row>
                        <div>Spring Roll &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.50</div>
                        <div>Vegetables &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $3.00</div>
                    </div>
                </StyledWrapper>
            </div>

            <div className="divider">
                <hr />
            </div>

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
                            613. Lychee or Logan Jelly in Logan Syrup on Ice (Thạch trái vải hoặc trái nhãn, nước nhãn
                            nhục)
                        </div>
                        <div>$5.75</div>
                    </StyledTitleMenu>
                    <StyledTitleMenu className="has-margin-bottom">
                        <div>614. Water chestnut pearl, jelly, mung bean w/coco milk (Sương sa hạt lựu cốt dừa)</div>
                        <div>$5.75</div>
                    </StyledTitleMenu>
                </StyledWrapper>
            </div>
        </Row>
    );
};

export default MenuContent;
