import React from 'react'
import styled from 'styled-components'
export default function Invitation() {
    return (
        <MainLayout>

            <StyledText fontSize="10px" letterSpacing="11.4px" marginTop="60px" marginBottom="32px">INVITATION</StyledText>

            <Line marginBottom="32px"/>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px" marginBottom="16px">
                우리, 사랑으로 하나 되기를 약속합니다.
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                두 사람은 서로의 인생에서 가장 큰 선물이자,
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                가장 소중한 존재가 되기로 했습니다.
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                사랑이라는 이름으로,
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                서로에게 평생을 함께 할 약속을 하고,
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                새로운 여정을 시작하려 합니다.
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                이 특별한 순간,
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="16px">
                여러분과 함께 나눌 수 있다면
            </StyledText>

            <StyledText color="#5F4C4C" fontSize="10px" lignHeight="28px" letterSpacing="0.4px"  marginBottom="24px">
                그 길은 더욱 빛날 것입니다.
            </StyledText>

            <Line width="0.5px" height="45px"/>
        </MainLayout>
    )
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const StyledText = styled.div`
  color: ${({ color }) => color || '#755D5D'};
  font-family: JejuMyeongjo;
  font-size: ${({ fontSize }) => fontSize || '24px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
  lign-height : ${({ lignHeight }) => lignHeight || 'normal'};
`;

const Line = styled.div`
width: ${({ width }) => width || '326px'};
height: ${({ height }) => height || '0.5px'};
background-color : #755D5D;
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
`

