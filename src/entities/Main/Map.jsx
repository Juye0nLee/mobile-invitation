import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import NAVERMAP_ICON from '../../assets/navermap.svg'
import KAKAOMAP_ICON from '../../assets/kakaomap.svg'
import TMAP_ICON from '../../assets/tmap.svg'
export default function Map() {
  const mapRef = useRef(null); // 지도 컨테이너 참조
  const lat = 37.6106397; // 위도
  const lng = 127.0308369; // 경도

  useEffect(() => {
    const { naver } = window;

    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng); // 위치 설정
      const map = new naver.maps.Map(mapRef.current, {
        center: location, // 중심 좌표
        zoom: 17, // 줌 레벨
        mapTypeControl: true, // 지도 타입 컨트롤 활성화
        mapTypeControlOptions: {
          style: naver.maps.MapTypeControlStyle.BUTTON, // 버튼 스타일
          position: naver.maps.Position.TOP_RIGHT, // 위치
        },
      });

      // 마커 생성
      new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, [lat, lng]);
  const handleDirectionClick = () => {
    const destinationCoords = `${lat},${lng}`; // 목적지 좌표
    const destinationName = encodeURIComponent('더 빅토리아 웨딩파티'); // 목적지 이름 URL 인코딩
    const schemeUrl = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${destinationName}&appname=com.example.app`;

    // 모바일 브라우저에서 실행
    const webUrl = `https://map.naver.com/v5/directions/-/${destinationCoords},${destinationName}/car`;

    // 네이버 지도 앱 열기
    window.location.href = schemeUrl;

    // 앱이 설치되지 않았을 경우 웹 브라우저로 연결
    setTimeout(() => {
      window.open(webUrl, '_blank');
    }, 500);
  };

  const destination = {
    lat: 37.6106397, // 목적지 위도
    lng: 127.0308369, // 목적지 경도
    name: '더 빅토리아 웨딩파티', // 목적지 이름
  };
  const openKakaoNavi = () => {
    const kakaoUrl = `kakaonavi://navigate?ep=${destination.lat},${destination.lng}&name=${encodeURIComponent(
      destination.name
    )}`;
    window.location.href = kakaoUrl;
  };

  const openTMap = () => {
    const tmapUrl = `tmap://route?goalx=${destination.lng}&goaly=${destination.lat}&goalname=${encodeURIComponent(
      destination.name
    )}`;
    window.location.href = tmapUrl;
  };

  return (
    <MainLayout>
      <StyledText fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
        오시는 길
      </StyledText>

      <Line marginBottom="50px" />

      <MapSection ref={mapRef} />

      <ButtonSection>
        <NaverMapButton onClick={handleDirectionClick}>
          <NaverMapImg src={NAVERMAP_ICON} />
          <StyledText>네이버지도</StyledText>
        </NaverMapButton>

        <NaverMapButton onClick={openKakaoNavi}>
          <NaverMapImg src={KAKAOMAP_ICON} />
          <StyledText>카카오맵</StyledText>
        </NaverMapButton>

        <NaverMapButton onClick={openTMap}>
          <NaverMapImg src={TMAP_ICON} />
          <StyledText>T맵</StyledText>
        </NaverMapButton>
      </ButtonSection>



      <Transport>
        <StyledText color="#755D5D" fontSize="8px" letterSpacing="1.28px" marginBottom="9px">
          지하철 이용 시
        </StyledText>
        <StyledText color="#755D5D" fontSize="7px" letterSpacing="1.28px">
          미아사거리역(4호선) 3번 출구 도보 3분거리
        </StyledText>
      </Transport>

      <Transport>
        <StyledText color="#755D5D" fontSize="8px" letterSpacing="1.28px" marginBottom="9px">
          자가용 이용 시
        </StyledText>
        <StyledText color="#755D5D" fontSize="7px" letterSpacing="1.28px">
          더 빅토리아 웨딩 파티, 강북구 송중동 42-8, 서울 강북구 도봉로 16
        </StyledText>
      </Transport>

      <Transport>
        <StyledText color="#755D5D" fontSize="8px" marginBottom="9px">
          버스 이용 시
        </StyledText>
        <BusList>
          <StyledText color="#755D5D" fontSize="7px">
            미아사거리역 정류장 하차
          </StyledText>
          <BusSection>
            <Bus>
              <StyledText color="#755D5D" fontSize="7px" letterSpacing="1.28px">
                간선버스(파랑)
              </StyledText>
              <BusNumber>
                101 102 106 107 120 130 140 141 142 144 148 150 151 153 160 710
                N15 N16
              </BusNumber>
            </Bus>
            <Bus>
              <StyledText color="#755D5D" fontSize="7px" letterSpacing="1.28px">
                지선버스(초록)
              </StyledText>
              <BusNumber>1124 1128 1137 1165</BusNumber>
            </Bus>
            <Bus>
              <StyledText color="#755D5D" fontSize="7px" letterSpacing="1.28px">
                마을버스
              </StyledText>
              <BusNumber>강북05 강북06 강북09 강북11 성북10-1 성북10-2</BusNumber>
            </Bus>
          </BusSection>
        </BusList>
      </Transport>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.span`
  color: ${({ color }) => color || '#000'};
  font-family: JejuMyeongjo;
  font-size: ${({ fontSize }) => fontSize || '8px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
`;

const Line = styled.div`
  width: ${({ width }) => width || '326px'};
  height: ${({ height }) => height || '0.5px'};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const MapSection = styled.div`
  width: 362px;
  height: 229px;
  border: 1px solid #ddd;
  margin-bottom: 18px;
`;

const Transport = styled.div`
  display: flex;
  flex-direction: column;
  width: 362px;
  margin-bottom: 28px;
`;

const BusList = styled.div`
  display: flex;
`;

const Bus = styled.div`
  display: flex;
  margin-left: 8px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const BusNumber = styled.div`
  color: #755D5D;
  font-family: JejuMyeongjo;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: 1.12px;
  width: 117px;
  margin-left: 8px;
`;

const BusSection = styled.div``;

const ButtonSection = styled.div`
display : flex;
margin-bottom : 16px;

`
const NaverMapButton = styled.div`
border : 1px solid #ddd;
background-color : #fff;
border-radius : 5px;
width : 80px;
height : 28px;
display : flex;
justify-content : space-evenly;
align-items: center;
margin-right : 10px;
`
const NaverMapImg = styled.img`
width : 16px;
height : 16px;
`