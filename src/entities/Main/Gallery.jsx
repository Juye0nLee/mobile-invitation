import React, { useState } from "react";
import styled from "styled-components";
import Modal from 'react-modal'
const images = [
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0568%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0577%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0355%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0537%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0338%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0608%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0550%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0562%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0498%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0008%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0123%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0309%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/IMG_0574.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0465%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/B7226578-3F2A-4FF8-B04D-99D32472985D.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0866%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/9F8191FF-26A6-41C1-8B9A-67512866A1A5.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/IMG_0575.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/IMG_0705.JPEG",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0977%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_1013%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0725%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0730%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0696%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0680%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg",
  "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0788%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC.jpg"

];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreView, setIsMoreView] = useState(false); // 더보기/접기 상태

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView); // 상태 반전
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

      {isMoreView === false && (
        <WhiteGradientOverlay /> /* 버튼을 누르지 않았을 때만, 그라데이션 추가  */
      )}

      <SliderContainer>
        <Images isMoreView={isMoreView}>
          {images.slice(0, isMoreView ? images.length : 9).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Slide ${index}`}
              onClick={() => openModal(image)}
            />
          ))}
          {images.length > 9 && (
            <PlusButton onClick={onClickImageMoreViewButton}>
              {isMoreView ? "접기" : "더보기"}
            </PlusButton>
          )}
        </Images>
      </SliderContainer>

      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%", maxHeight: "90vh" }} />
        </ModalContent>
      </StyledModal>
    </MainLayout>
  );
}

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
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "0px"};
`;

const Line = styled.div`
  width: ${({ width }) => width || "326px"};
  height: ${({ height }) => height || "0.5px"};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
`;

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items : center;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items : center;
  gap: 10px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: none;
  // padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
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