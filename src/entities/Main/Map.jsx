import React from 'react'
import styled from 'styled-components';
export default function Map() {
    return (
        <MainLayout>
            <StyledText fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
                오시는 길
            </StyledText>

            <Line marginBottom="60px" />

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
  color: ${({ color }) => color || "#000"};
  font-family: JejuMyeongjo;
  font-size: ${({ fontSize }) => fontSize || "8px"};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  margin-left: ${({ marginLeft }) => marginLeft || "0px"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "0px"};
`;

const Line = styled.div`
  width: ${({ width }) => width || "326px"};
  height: ${({ height }) => height || "0.5px"};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
`;