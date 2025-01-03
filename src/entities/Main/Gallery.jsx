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
  const [selectedImage, setSelectedImage] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image)
  };

  const closeModal = () => setIsOpen(false);

  const showModal = () => {
    return (
      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <ModalContent>
          <img src={selectedImage}/>
        </ModalContent>
      </StyledModal>
    );
  }

  return (
    <MainLayout>
      <StyledText fontFamily="JejuMyeongjo" fontSize="16px" letterSpacing="11.4px" marginBottom="32px">
        GALLERY
      </StyledText>

      <Line marginBottom="32px" />

      <StyledText color="#755D5D" fontSize="12px" marginBottom="32px">
        이미지를 클릭하시면 확대보기가 가능합니다.
      </StyledText>

      <SliderContainer>
        <Images>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Slide ${index}`}
              isActive={index === currentImage}
              onClick={()=>openModal(image)}
            />
          ))}
        </Images>
        <Button className="back-btn" onClick={handleBack}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </Button>
        <Button className="next-btn" onClick={handleNext}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Button>
        <Thumbnails>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              isActive={index === currentImage}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </Thumbnails>
      </SliderContainer>

      {showModal()}
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

const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  height: 420px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.4);
`;

const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: ${(props) => (props.isActive ? "scale(1)" : "scale(1.1)")};
  transition: all 500ms ease-in-out;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.2);
  transition: background 300ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  &.back-btn {
    left: 0;
  }

  &.next-btn {
    right: 0;
  }
`;

const Thumbnails = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: auto;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isActive ? "#fff" : "transparent")};
  transition: border 300ms ease-in-out;
`;

const StyledModal = styled(Modal)`
  width: 362px;
  height: 338px;
  padding: 0;
  border: none;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  border-radius: 8px;
  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

