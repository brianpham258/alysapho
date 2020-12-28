import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Baguette = () => {
    return (
        <div id="baguette">
            <div className="menu-title-section">
                <div className="columns is-desktop is-menu-title">
                    <div className="column">Baguette (Bánh Mì)</div>
                    <div className="column is-2">$7.49</div>
                </div>
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
                <div className="has-margin-bottom">107. Shredded Chicken (Gà Chà Bông)</div>
                <div className="has-margin-bottom">108. Curry Tofu Puffs (Cari Chay)</div>
                <div className="has-margin-bottom">109. Soya Tofu Puffs (Xì Dầu Chay)</div>
                <div className="has-margin-bottom">110. Five-Spice Pork (Ngũ Vị Hương)</div>
                <div className="has-margin-bottom">111. BBQ Soya</div>
                <div className="has-margin-bottom has-text-right">
                    <div>Extra</div>
                    <div>Daikon and carrots &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.75</div>
                    <div>Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                    <div>Tofu Puff &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $2.00</div>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Baguette;
