import React, { useState } from 'react'
import Styled from 'styled-components';
import Paiks_Cream_Crape from '../../Image/MainBanner/Paiks_Cream_Crape.jpg';
import Paiks_IceCream_Ratte from '../../Image/MainBanner/Paiks_IceCream_Ratte.jpg';
import Compose from '../../Image/MainBanner/Compose.jpg';

const ImgSlide = () => {
    

    // 이미지 슬라이드 버튼
    const [img, setImg] = useState(0);

    const firstDot = () => {
        setImg(0)
    }
    const secondDot = () => {
        setImg(-100)
    }
    const thirdDot = () => {
        setImg(-200)
    }
    
        return (
            <ScWrap>
            <ScImgSlideWrap img={img}>
                <ScImg src={Paiks_Cream_Crape} >
                    <ScContentWrap>
                        <ScDotWrap>
                            <ScDot onClick={firstDot} img={img}/>
                            <ScDot onClick={secondDot} img={img}/>
                            <ScDot onClick={thirdDot} img={img}/>
                        </ScDotWrap>
                    </ScContentWrap>
                </ScImg>
                <ScImg src={Paiks_IceCream_Ratte}>
                    <ScContentWrap>
                            <ScDotWrap>
                                <ScDot onClick={firstDot} img={img}/>
                                <ScDot onClick={secondDot} img={img}/>
                                <ScDot onClick={thirdDot} img={img}/>
                            </ScDotWrap>
                    </ScContentWrap>
                </ScImg>
                <ScImg src={Compose}>
                    <ScContentWrap>
                            <ScDotWrap>
                                <ScDot onClick={firstDot} img={img}/>
                                <ScDot onClick={secondDot} img={img}/>
                                <ScDot onClick={thirdDot} img={img}/>
                            </ScDotWrap>
                    </ScContentWrap>
                </ScImg>
            </ScImgSlideWrap>
        </ScWrap>
        )
    }


const ScWrap = Styled.div`
    overflow: hidden;
    margin: 10px auto;
`;

const ScImgSlideWrap = Styled.div`
    position: relative;
    display: flex;
    width: 300vw;
    height: 50vh;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    margin: auto;
    transform : translate(${props => props.img}vw);
`;


const ScImg = Styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 50vh;
    background-image: url(${props => props.src});
    background-size: cover;
    float: left;
`;

const ScContentWrap = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 70px;
    padding-top: 20px;
`;


const ScDotWrap = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;    
`;

const ScDot = Styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: black;    
    &:hover{
        cursor: pointer;
    }
    &:nth-child(1){
        opacity: ${props => props.img === 0 ? "1" : "0.2"}
    }
    &:nth-child(2){
        opacity: ${props => props.img === -100 ? "1" : "0.2"}
    }
    &:nth-child(3){
        opacity: ${props => props.img === -200 ? "1" : "0.2"}
    }
`;

export default ImgSlide