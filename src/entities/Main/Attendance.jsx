import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import {db} from '../../firebase'
import {doc,getDoc} from 'firebase/firestore'
import CHECK from '../../assets/check.svg'

export default function Attendance() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // 선택 상태를 관리

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const handleSelect = (option) => {
    setSelected(option); // '참석' 또는 '불참' 선택
  };

  const showModal = () => {
    return (
      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <ModalContent>
          <StyledText fontSize="14px" marginBottom="20px" marginTop="18px" letterSpacing="11.4px">
            참석 의사 전달
          </StyledText>
          <Line marginBottom="30px" />
          <StyledText fontSize="11px" color="#574545" marginBottom="16px">참석여부</StyledText>
          <StyledInput placeholder='이름을 입력해주세요'/>
          <ButtonSection>
            <SelectButton 
              isSelected={selected === '참석'} 
              onClick={() => handleSelect('참석')}
            >
              참석
            </SelectButton>
            <SelectButton 
              isSelected={selected === '불참'} 
              onClick={() => handleSelect('불참')}
            >
              불참
            </SelectButton>
          </ButtonSection>

          <SendButton disabled={!selected} isDisabled={!selected}>
            참석 의사 전달하기
          </SendButton>
        </ModalContent>
      </StyledModal>
    )
  };

  return (
    <MainLayout>
      <StyledText fontFamily="JejuMyeongjo" letterSpacing="11.4px" marginBottom="32px">참석의사전달</StyledText>

      <Line marginBottom="69px" />

      <StyledText fontSize="14px" color="#755D5D" marginBottom="8px">축하의 마음으로 참석해주시는</StyledText>
      <StyledText fontSize="14px" color="#755D5D" marginBottom="8px">모든 분들을 귀하게 모실 수 있도록</StyledText>
      <StyledText fontSize="14px" color="#755D5D" marginBottom="53px"> 참석 의사를 전달 부탁드립니다.</StyledText>

      <AttendanceButton onClick={() => openModal()}>
        <CheckIcon src={CHECK} />
        <StyledText color="#fff">참석의사 전달하기</StyledText>
      </AttendanceButton>

      {showModal()}
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom : 74px;
`;

const StyledText = styled.span`
  color: ${({ color }) => color || '#755D5D'};
  font-family: ${({ fontFamily }) => fontFamily || 'GangwonEdu_OTFLightA'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
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

const AttendanceButton = styled.div`
  width: 189px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #A09B86;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CheckIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 18px;
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

const ButtonSection = styled.div`
  display: flex;
  margin-bottom: 26px;
`;

const SelectButton = styled.div`
  width: 54px;
  height: 32px;
  border-radius: 21px;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#A09B86' : '#ddd')};
  background: ${({ isSelected }) => (isSelected ? '#A09B86' : '#FFF')};
  color: ${({ isSelected }) => (isSelected ? '#FFF' : '#A09B86')};
  font-family: GangwonEdu_OTFLightA;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`;

const SendButton = styled.div`
  width: 168px;
  height: 31px;
  border-radius: 21px;
  background: ${({ isDisabled }) => (isDisabled ? '#CCC' : '#A09B86')};
  color: ${({ isDisabled }) => (isDisabled ? '#777' : '#FFF')};
  font-family: GangwonEdu_OTFLightA;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;

const StyledInput = styled.input`
width: ${({ width }) => width || '120px'};
height: ${({ height }) => height || '24px'};
flex-shrink: 0;
border: 1px solid #ddd;
background: #FFF;
color: #755D5D;
font-family: GangwonEdu_OTFLightA;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.28px;
margin-right: ${({ marginRight }) => marginRight || '0px'};
margin-bottom: 10px;
&:focus {
  outline: none;
}
&:: placeholder {
  color : #A09B86;
}
`