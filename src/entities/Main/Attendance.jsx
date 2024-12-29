import React from 'react'
import styled from 'styled-components'
import CHECK from '../../assets/check.svg'
export default function Attendance() {
  return (
    <MainLayout>
        <StyledText fontFamily="JejuMyeongjo" fontSize="10px" letterSpacing="11.4px" marginBottom="32px">참석의사전달</StyledText>

        <Line marginBottom="69px"/>

        <StyledText fontSize="10px" color="#755D5D" marginBottom="8px">축하의 마음으로 참석해주시는</StyledText>
        <StyledText fontSize="10px" color="#755D5D" marginBottom="8px">모든 분들을 귀하게 모실 수 있도록</StyledText>
        <StyledText fontSize="10px" color="#755D5D" marginBottom="53px"> 참석 의사를 전달 부탁드립니다.</StyledText>

        <AttendanceButton>
            <CheckIcon src={CHECK}/>
            <StyledText color="#fff">참석의사 전달하기</StyledText>
        </AttendanceButton>
      
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.span`
  color: ${({ color }) => color || '#755D5D'};
  font-family: ${({ fontFamily }) => fontFamily || 'GangwonEdu_OTFLightA'};
  font-size: ${({ fontSize }) => fontSize || '11px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
`;

const AttendanceMent = styled.div`
color: #755D5D;
text-align: center;
font-family: GangwonEdu_OTFLightA;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 19px; /* 190% */
letter-spacing: 1.6px;
width : 147px;
margin-bottom : 53px;
`

const Line = styled.div`
  width: ${({ width }) => width || '326px'};
  height: ${({ height }) => height || '0.5px'};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const AttendanceButton = styled.div`
width: 189px;
height: 45px;
flex-shrink: 0;
border-radius: 21px;
background: #A09B86;
// box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
display : flex;
justify-content : center;
align-items : center;
`
const CheckIcon = styled.img`
width: 18px;
height: 18px;
margin-right : 18px;
`