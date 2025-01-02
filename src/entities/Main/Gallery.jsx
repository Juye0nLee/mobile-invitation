import React, { useState } from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0568%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0008%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0123%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0309%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0338%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0465%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0680%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0788%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0866%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/9F8191FF-26A6-41C1-8B9A-67512866A1A5.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0355%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0977%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0730%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0696%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0608%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0577%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0568%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0562%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0550%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0537%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0498%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_1013%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0537%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg"
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMoreView, setIsMoreView] = useState(false); // 더보기/접기 상태

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView); // 상태 반전
  };

  const onclickImage = (index) => {
    setSelectedImageIndex(index); // 선택된 이미지 인덱스 변경
  };

  return (
    <MainLayout>
      <StyledText fontFamily="JejuMyeongjo" fontSize="16px" letterSpacing="11.4px" marginBottom="32px">
        GALLERY
      </StyledText>

      <Line marginBottom="32px" />

      <StyledText color="#755D5D" fontSize="12px" marginBottom="32px">
        이미지를 클릭하시면 확대보기가 가능합니다.
      </StyledText>
      <ImageContentWrap>
        <MainImageWrap>
          <MainImage
            src={images[selectedImageIndex]}
            alt="Selected Image"
          />
        </MainImageWrap>

        {isMoreView === false && (
            <WhiteGradientOverlay /> /* 버튼을 누르지 않았을 때만, 그라데이션 추가  */
          )}

        <PreviewImageWrap isMoreView={isMoreView}>
          {images.slice(0, isMoreView ? images.length : 12).map((image, index) => (
            <PreviewImage
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => onclickImage(index)}
            />
          ))}
        </PreviewImageWrap>

        {images.length > 12 && (
          <PlusButton onClick={onClickImageMoreViewButton}>
            {isMoreView ? "접기" : "더보기"}
          </PlusButton>
        )}
      </ImageContentWrap>
    </MainLayout>
  );
}

// Styled Components
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.div`
  color: ${({ color }) => color || "#755D5D"};
  font-family: ${({ fontFamily }) => fontFamily || "GangwonEdu_OTFLightA"};
  font-size: ${({ fontSize }) => fontSize || "24px"};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "0px"};
`;

const Line = styled.div`
  width: ${({ width }) => width || "326px"};
  height: ${({ height }) => height || "0.5px"};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
`;
const ImageContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const MainImage = styled.img`
  border-radius: 10px;
`;

const MainImageWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const PreviewImageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-height: ${(props) => (props.isMoreView ? "1000px" : "300px")};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  margin-bottom: 10px;
`;

const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const PlusButton = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  z-index : 100;
  font-family: GangwonEdu_OTFLightA;
font-size: 16px;
color: #755D5D;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(253, 252, 245, 0) 0%, /* 그라데이션 설정 */
      rgb(253, 252, 245) 100%);
`;