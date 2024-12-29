import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

export default function SendHeart() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState();

    const openModal = (type) => {
        setIsOpen(true);
        setType(type);
    };
    const closeModal = () => setIsOpen(false);

    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("계좌번호가 복사되었습니다."))
            .catch(() => alert('복사에 실패했습니다. 다시 시도해주세요.'));
    };

    const showModal = () => {
        switch (type) {
            case "신랑": {
                return (
                    <StyledModal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={true}
                    >
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalContent>
                            <StyledText fontSize="14px" marginBottom="20px" marginTop="18px">
                                신랑측 계좌번호
                            </StyledText>
                            <Line marginBottom="30px" />
                            <WrapAccountNumber>
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    카카오뱅크 3333-16-5003902
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('3333-16-5003902')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 이상민</StyledText>
                            <WrapAccountNumber>
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    기업은행 294-014-54802011
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('294-014-54802011')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 이시우</StyledText>
                            <WrapAccountNumber>
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    국민은행 436302-01-085050
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('436302-01-085050')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 김은경</StyledText>
                        </ModalContent>
                    </StyledModal>
                );
            }
            case "신부": {
                return (
                    <StyledModal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={true}
                    >
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalContent>
                            <StyledText fontSize="14px" marginBottom="20px" marginTop="18px">
                                신부측 계좌번호
                            </StyledText>
                            <Line marginBottom="30px" />
                            <WrapAccountNumber backgroundColor="#FFC3C3">
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    신한은행  110-370-961681
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('110-370-961681')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 김민주</StyledText>
                            <WrapAccountNumber backgroundColor="#FFC3C3">
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    신한은행 110-006-523800
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('110-006-523800')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 김석환</StyledText>
                            <WrapAccountNumber backgroundColor="#FFC3C3">
                                <StyledText fontSize="11px" color="#574545" letterSpacing="3.41px" marginRight="8px">
                                    SC제일은행 252-20-376746
                                </StyledText>
                                <CopyButton onClick={() => copyToClipboard('252-20-376746')}>복사</CopyButton>
                            </WrapAccountNumber>
                            <StyledText fontSize="11px" color="#574545" marginBottom="27px">예금주 송효주</StyledText>
                        </ModalContent>
                    </StyledModal>
                );
            }
            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <StyledText fontFamily="JejuMyeongjo" fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
                마음전하기
            </StyledText>

            <Line marginBottom="50px" />

            <StyledText fontSize="10px" letterSpacing="1.6px" marginBottom="41px">
                축하의 마음을 담아 축의금을 전달해보세요
            </StyledText>

            <AccountNumberSection>
                <StyledText color="#3F96C4" marginRight="10px">
                    신랑측
                </StyledText>
                <ShowAccountNumber onClick={() => openModal("신랑")}>계좌번호 보기</ShowAccountNumber>
            </AccountNumberSection>

            <AccountNumberSection>
                <StyledText color="#F4B0B0" marginRight="10px">
                    신부측
                </StyledText>
                <ShowAccountNumber backgroundColor="#FFC3C3" onClick={() => openModal("신부")}>계좌번호 보기</ShowAccountNumber>
            </AccountNumberSection>

            {showModal()}
        </MainLayout>
    );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom : 60px;
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

const Line = styled.div`
  width: ${({ width }) => width || '326px'};
  height: ${({ height }) => height || '0.5px'};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const AccountNumberSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const ShowAccountNumber = styled.div`
  width: 176px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 21px;
  background: ${({ backgroundColor }) => backgroundColor || '#C3E0FF'};
  color: #fff;
  font-family: GangwonEdu_OTFLightA;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
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

const WrapAccountNumber = styled.div`
  width: 272px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ backgroundColor }) => backgroundColor || '#C3E0FF'};
  color: #574545;
  font-family: GangwonEdu_OTFLightA;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.41px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11px;
`;

const CopyButton = styled.div`
width: 39px;
height: 20px;
border-radius: 8px;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
color: #574545;
font-family: GangwonEdu_OTFLightA;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
`
