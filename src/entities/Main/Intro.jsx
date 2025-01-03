import React from 'react';
import styled from 'styled-components';
export default function Intro() {
    return (
        <SVGContainer>

            <Elements>

                <StyledText>상민, 민주 결혼합니다</StyledText>

                <WrapSvg>
                    <svg width="50" height="50" viewBox="0 0 250 250">
                        <g transform="translate(100 100)">
                            <style type="text/css">
                                {`
.st0 { fill: #ffffff; }
.st1 { fill: #ffffff; }
.st2 { fill: #ffffff; }
.st3 { fill: #ffffff; }
.st4 { fill: #ffffff; }
.st5 { fill: #ffffff; }
.st6 { fill: #ffffff; }
.st7 { fill: #ffffff; }
.st8 { fill: #ffffff; }
.st9 { fill: #ffffff; }
.st10 { fill: #ffffff; }
.st11 { fill: #ffffff; }
.st12 { fill: #ffffff; }
.st13 { fill: #ffffff; }
.st14 { fill: #ffffff; }
`}
                            </style>
                            <g transform="translate(-50 -50)">
                                <g>
                                    <path className="st0" d="M92.5,44.5L55,82c-2.7,2.7-7.2,2.7-9.9,0L13.9,50.9l-6.4-6.4C2.5,39.5,0,33,0,26.4c0-6.5,2.5-13.1,7.5-18.1 c1.2-1.2,2.5-2.3,3.9-3.2c9.9-6.6,23.5-5.5,32.2,3.2l6.4,6.4l6.4-6.4c5-5,11.5-7.5,18.1-7.5c6.5,0,13.1,2.5,18.1,7.5 C102.5,18.3,102.5,34.5,92.5,44.5z" />
                                    <path className="st1" d="M92.5,44.5L62.1,74.9c-2.7,2.7-7.2,2.7-9.9,0L21,43.8l-6.4-6.4c-5-5-7.5-11.5-7.5-18.1 c0-4.9,1.4-9.9,4.3-14.1c9.9-6.6,23.5-5.5,32.2,3.2l6.4,6.4l6.4-6.4c5-5,11.5-7.5,18.1-7.5c6.5,0,13.1,2.5,18.1,7.5 C102.5,18.3,102.5,34.5,92.5,44.5z" />
                                    <path className="st2" d="M50,14.8L50,14.8l-47.2,0C0.9,18.4,0,22.4,0,26.4c0,0.7,0,1.5,0.1,2.2h99.8c0.4-4.7-0.5-9.5-2.7-13.9L50,14.8 L50,14.8z" />
                                    <path className="st3" d="M50,14.8L50,14.8l-42.5,0c-0.3,1.5-0.4,3-0.4,4.5c0,3.2,0.6,6.3,1.8,9.3h91c0.4-4.7-0.5-9.5-2.7-13.9L50,14.8 L50,14.8z" />
                                    <path className="st4" d="M5.7,42.5h88.6c3.3-4.1,5.2-8.9,5.6-13.9H0.1C0.5,33.6,2.4,38.4,5.7,42.5z" />
                                    <path className="st5" d="M99.9,28.6h-91c1.2,3.2,3.1,6.2,5.7,8.7l5.1,5.1h74.6C97.6,38.4,99.5,33.6,99.9,28.6z" />
                                    <path className="st6" d="M5.7,42.5c0.6,0.7,1.2,1.4,1.8,2l6.4,6.4l5.5,5.5h61.3l11.9-11.9c0.6-0.6,1.2-1.3,1.8-2H5.7z" />
                                    <path className="st7" d="M19.7,42.5l1.3,1.3l12.6,12.6h47l11.9-11.9c0.6-0.6,1.2-1.3,1.8-2H19.7z" />
                                    <polygon className="st8" points="33.2,70.2 66.8,70.2 80.6,56.4 19.3,56.4    " />
                                    <polygon className="st9" points="80.6,56.4 33.6,56.4 47.5,70.2 66.8,70.2    " />
                                    <path className="st10" d="M66.8,70.2H33.2L45,82c2.7,2.7,7.2,2.7,9.9,0L66.8,70.2z" />
                                    <path className="st11" d="M47.5,70.2l4.7,4.7c2.7,2.7,7.2,2.7,9.9,0l4.7-4.7H47.5z" />
                                </g>
                                <animateTransform
                                    attributeName="transform"
                                    type="scale"
                                    values="1; 1.5; 1.25; 1.5; 1.5; 1;"
                                    dur="1s"
                                    repeatCount="indefinite" />
                            </g>
                        </g>
                    </svg>

                </WrapSvg>
            </Elements>

            <InfoText marginTop="10%"> 2025년 2월 15일 토요일 오후 12시 30분 </InfoText>
            <InfoText> 더 빅토리아웨딩파티 하늘정원홈 9F Ciel Garden Hall </InfoText>

        </SVGContainer>
    );
}

const SVGContainer = styled.div`
width: 100vw;
height: 100%;
position : absolute;
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
background: linear-gradient(
  to bottom, /* 위에서 아래로 그라데이션 */
  rgba(252,182,159, 0.9) 0%,  /* 핑크빛 시작색 */
  rgba(255,236,210, 0.9) 100%  /* 노란빛으로 투명해짐 */
);@media (hover: hover) and (pointer: fine) {
    width: 402px;
}
z-index : 1000;
`;

const WrapSvg = styled.div`
height : 60px;
width : 70px;
`

const Elements = styled.div`
padding : 10px;
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
`
const StyledText = styled.div`
  color: #fff;
  font-family: 'GangwonEdu_OTFBoldA', serif;
  font-size: 16px; // 메인 텍스트 크기
  font-weight: bold; // 강조된 텍스트
`;

const InfoText = styled.div`
  color: #fff;
  font-family: 'GangwonEdu_OTFLightA', serif;
  font-size: 12px; 
margin-top: ${({ marginTop }) => marginTop || "0px"};
`;