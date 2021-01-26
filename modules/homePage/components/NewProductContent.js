import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: #ffcc99;
    font-family: 'Yellowtail', cursive;
    color: rgb(248, 248, 248);
    padding: 20px 5%;
`;

const StyledTitle = styled.div`
    font-size: 60px;
    text-align: center;
    margin-bottom: 30px;
`;

const StyledImgWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledImg = styled.img`
    margin-top: -50px;
    background-size: cover;
    width: 60%;
`;

const StyledProductImgWrapper = styled.div`
    .left {
        display: flex;
        align-items: center;

        .img {
            margin-right: 5px;
        }
        .p-title {
            @media only screen and (min-width: 700px) {
                font-size: 4em;
            }
            font-size: 2em;
        }
        .p-description {
            @media only screen and (min-width: 700px) {
                font-size: 2em;
            }
            font-size: 1em;
        }
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .img {
            margin-left: 5px;
        }
        .p-title {
            @media only screen and (min-width: 700px) {
                font-size: 4em;
            }
            font-size: 2em;
            text-align: right;
        }
        .p-description {
            @media only screen and (min-width: 700px) {
                font-size: 2em;
            }
            font-size: 1em;
        }
    }
`;

const StyledProductImg = styled.img`
    @media only screen and (min-width: 700px) {
        width: 15%;
    }
    width: 25%;
`;

const StyledButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    margin-top: 30px;
`;

const CONTENTS = [
    {
        className: 'left',
        img: {
            src: '/taro-tea.png',
            alt: 'taro tea'
        },
        title: 'Taro Bubble Tea',
        description: 'Made with cooked taro, baking soda, condensed milk, taro jelly, boba pops.'
    },
    {
        className: 'right',
        img: {
            src: '/strawberry-tea.png',
            alt: 'strawberry tea'
        },
        title: 'Strawberry Bubble Tea',
        description: 'Made with frozen strawberry, milk tea, boba tea, strawberry jelly, boba pops.'
    },
    {
        className: 'left',
        img: {
            src: '/mango-tea.png',
            alt: 'mango tea'
        },
        title: 'Mango Bubble Tea',
        description: 'Made with frozen mango, coconut milk, jasmine tea, mango jelly, boba pops.'
    }
];

const NewProductContent = () => {
    return (
        <StyledWrapper>
            <StyledTitle id="new_product">New product</StyledTitle>
            <StyledImgWrapper>
                <StyledImg src="/bubble-tea.png" alt="bubble tea" />
            </StyledImgWrapper>
            <StyledTitle>Bubble Tea</StyledTitle>
            <StyledTitle>Only $4.50</StyledTitle>

            {CONTENTS.map(item => {
                const { className, img, title, description } = item;
                return (
                    <StyledProductImgWrapper>
                        <div className={className}>
                            {className === 'left' ? (
                                <>
                                    <StyledProductImg className="img" src={img.src} alt={img.alt} />
                                    <div>
                                        <div className="p-title">{title}</div>
                                        <div className="p-description">{description}</div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div className="p-title">{title}</div>
                                        <div className="p-description">{description}</div>
                                    </div>
                                    <StyledProductImg className="img" src={img.src} alt={img.alt} />
                                </>
                            )}
                        </div>
                    </StyledProductImgWrapper>
                );
            })}

            <StyledButtonWrapper>
                <a href="/#boba">Click here to see more options!</a>
            </StyledButtonWrapper>
        </StyledWrapper>
    );
};

export default NewProductContent;
