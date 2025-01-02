import React from 'react';
import styled from 'styled-components';
import HEART_ICON from '../../assets/heart.svg'; // 하트 아이콘 추가 (경로에 맞게 수정)

export default function Footer() {
  return (
    <MainLayout>
      <StyledIcon src={HEART_ICON} alt="heart-icon" />
      <StyledText>행복으로 가득 찬 민주와 상민의 결혼생활을 진심으로 응원합니다.</StyledText>
      <StyledSubText>Designer 장선아 | Developer 이주연</StyledSubText>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: #948F79;
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
  justify-content: center; // 수직 가운데 정렬
  box-sizing: border-box;
  padding: 20px; // 내부 여백
  gap: 1rem; // 요소 간 간격
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

const StyledText = styled.span`
  color: #fff;
  font-family: 'JejuMyeongjo', serif;
  font-size: 12px; // 메인 텍스트 크기
  font-weight: bold; // 강조된 텍스트
  text-align: center; // 텍스트 가운데 정렬
  margin-bottom: 0.5rem;
`;

const StyledSubText = styled.span`
  color: #e5e5e5;
  font-family: 'GangwonEdu_OTFLightA', sans-serif;
  font-size: 12px; // 서브 텍스트 크기
  font-weight: 400;
  text-align: center;
`;
