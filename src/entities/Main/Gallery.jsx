import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const IMAGE = "https://jy-study-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%BC/SJK_0568%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC.jpg";

Modal.setAppElement("#root"); // Modal 초기화 (접근성 설정)

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <MainLayout>
            <StyledText fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
                GALLERY
            </StyledText>

            <Line marginBottom="60px" />

            {/* 썸네일 이미지 */}
            <Thumbnail src={IMAGE} alt="Gallery Thumbnail" onClick={openModal} />

            {/* 모달 */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)", // 배경 어두운 색
                    },
                    content: {
                        padding: "0",
                        border: "none",
                        background: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "90%", // 모달 크기를 화면 크기에 맞춤
                        maxHeight: "90%", // 모달 크기를 화면 크기에 맞춤
                        overflow: "hidden",
                    },
                }}
            >
                <LargeImage src={IMAGE} alt="Gallery Large Image" />
            </Modal>
        </MainLayout>
    );
}

// 스타일 컴포넌트
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.div`
  color: ${({ color }) => color || "#755D5D"};
  font-family: JejuMyeongjo;
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

const Thumbnail = styled.img`
  width: 317px;
  height: 211px;
  cursor: pointer;
  &:hover {
    border-color: #888;
  }
`;

const LargeImage = styled.img`
  width: auto;
  height: auto;
  max-width: 90vw; /* 화면의 90% 너비 */
  max-height: 90vh; /* 화면의 90% 높이 */
  object-fit: contain; /* 이미지가 비율을 유지하며 모달 크기에 맞게 조정됨 */
`;

const StyledModal = styled(Modal)``
