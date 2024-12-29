import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MAIN_IMAGE = 'https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/main_Image.png';

export default function MainSection() {
  const [daysLeft, setDaysLeft] = useState(null);

  // 디데이 계산 함수
  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date('2025-02-15'); // 목표 날짜 설정
      const currentDate = new Date(); // 현재 날짜
      const difference = targetDate - currentDate; // 날짜 차이 (밀리초)
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // 밀리초 -> 일 단위 변환
      setDaysLeft(days);
    };

    calculateDaysLeft();
  }, []);

  return (
    <MainLayout>
      
      <StyledText fontFamily="JejuMyeongjo" fontSize="16px" color="#B09D86" marginBottom="26px" marginTop="98px">
        {daysLeft !== null ? `D-${daysLeft}` : 'Loading...'}
      </StyledText>

      <StyledText fontFamily="JejuMyeongjo" color="#B09D86" fontSize="32px" letterSpacing="16px" marginBottom="51px">
        2025 0215
      </StyledText>
      
      <MainImage src={MAIN_IMAGE} />

      <StyledText fontFamily="JejuMyeongjo" marginBottom="32px" marginTop="50px">
        이상민 ∙ 김민주
      </StyledText>

      <StyledText fontSize="11px" color="#5F4C4C" marginBottom="16px" lignHeight="13px">
        2025년 2월 15일 토요일 오후 12시 30분
      </StyledText>

      <StyledText fontSize="11px" color="#5F4C4C" marginBottom="16px" lignHeight="13px">
        더 빅토리아 웨딩파티 하늘정원홀
      </StyledText>

      <StyledText fontSize="11px" color="#5F4C4C" marginBottom="44px" lignHeight="13px">
        9F Ciel Garden Hall
      </StyledText>

      <Line/>

      <StyledText fontSize="10px" color="#5F4C4C" marginBottom="16px" lignHeight="13px">
        이시우 ∙ 김은경 의 아들 상민
      </StyledText>

      <StyledText fontSize="10px" color="#5F4C4C" marginBottom="58px" lignHeight="13px">
        김석환 ∙ 송효주 의 딸 민주
      </StyledText>

      <MiniBanner>
        <StyledText color="#fff" fontSize="10px" letterSpacing="6.8px" lignHeight="26px" >소중한 당신을 초대합니다</StyledText>
      </MiniBanner>



    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainImage = styled.img`
  width: 346px;
  height: 314px;
  flex-shrink: 0;
`;

const StyledText = styled.div`
  color: ${({ color }) => color || '#574545'};
  font-family: ${({ fontFamily}) => fontFamily || "GangwonEdu_OTFLightA"};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
  lign-height : ${({ lignHeight }) => lignHeight || 'normal'};
`;

const Line = styled.div`
width: 0.5px;
height: 45px;
background-color : #755D5D;
margin-bottom : 44px;
`

const MiniBanner = styled.div`
width: 100%;
height: 58px;
background-color : #B7B5A9;
display : flex; 
justify-content : center;
align-items : center;
margin-bottom: 0;
`