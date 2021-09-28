import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'rc-scroll-anim';

const StyledWrapper = styled.div`
    background-color: #ffbf80;
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
                font-size: 2.5em;
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
                font-size: 2.5em;
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
    font-size: 60px;
    margin-top: 30px;
`;

const HEADER_ANIM = {
    y: 0,
    opacity: 1,
    playScale: 0.3
};

const CONTENT_ANIM = {
    x: 0,
    opacity: 1,
    playScale: 0.3
};

const CONTENTS = [
    {
        className: 'left',
        parallax: {
            animation: CONTENT_ANIM,
            style: {
                transform: 'translateX(100px)',
                opacity: 0
            }
        },
        img: {
            src: '/taro-tea.png',
            alt: 'taro tea'
        },
        title: 'Taro Bubble Tea',
        description: 'Taro tea with jelly and boba.'
    },
    {
        className: 'right',
        parallax: {
            animation: CONTENT_ANIM,
            style: {
                transform: 'translateX(-100px)',
                opacity: 0
            }
        },
        img: {
            src: '/strawberry-tea.png',
            alt: 'apple tea'
        },
        title: 'Cinnamon Apple Bubble Tea',
        description: 'Cinnamon Apple tea with jelly and boba.'
    },
    {
        className: 'left',
        parallax: {
            animation: CONTENT_ANIM,
            style: {
                transform: 'translateX(100px)',
                opacity: 0
            }
        },
        img: {
            src: '/mango-tea.png',
            alt: 'mango tea'
        },
        title: 'Mango Bubble Tea',
        description: 'Mango tea with jelly and boba.'
    }
];

const NewProductContent = () => {
    return (
        <Parallax
            animation={HEADER_ANIM}
            style={{ transform: 'translateY(100px)', opacity: 0 }}
        >
            <StyledWrapper>
                <Parallax
                    animation={HEADER_ANIM}
                    style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                    <StyledTitle id="new_product">New product</StyledTitle>
                </Parallax>

                <Parallax
                    animation={HEADER_ANIM}
                    style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                    <StyledImgWrapper>
                        <StyledImg src="/bubble-tea.png" alt="bubble tea" />
                    </StyledImgWrapper>
                </Parallax>

                <Parallax
                    animation={HEADER_ANIM}
                    style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                    <StyledTitle>Bubble Tea</StyledTitle>
                    <StyledTitle>Only $4.50</StyledTitle>
                </Parallax>

                {CONTENTS.map(item => {
                    const { className, parallax, img, title, description } = item;
                    return (
                        <Parallax animation={parallax.animation} style={parallax.style}>
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
                        </Parallax>
                    );
                })}

                <StyledButtonWrapper>
                    <a href="/#boba">Click here to see more options!</a>
                </StyledButtonWrapper>
            </StyledWrapper>
        </Parallax>
    );
};

export default NewProductContent;
