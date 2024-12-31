import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase'; // Firestore 초기화 파일
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [guestBookEntries, setGuestBookEntries] = useState([]); // 방명록 데이터 상태

  // Firestore에서 데이터 가져오기
  const getGuestBook = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'GuestBook'));
      const entries = querySnapshot.docs.map((doc) => ({
        id: doc.id, // 문서 ID
        ...doc.data(), // 문서 데이터
      }));
      setGuestBookEntries(entries); // 상태에 데이터 저장
    } catch (e) {
      console.error('Error getting documents: ', e);
      alert('방명록 데이터를 가져오는 중 오류가 발생했습니다.');
    }
  };

  // Firestore에 데이터 추가하기
  const addGuestBook = async () => {
    if (!name || !password || !content) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, 'GuestBook'));
      const docCount = querySnapshot.size;
      const customId = `post${docCount + 1}`;
      const docRef = doc(db, 'GuestBook', customId);
      await setDoc(docRef, {
        name,
        password,
        content,
        timestamp: new Date(), // 저장 시간 추가
      });
      console.log('Document written with ID: ', customId);
      alert('방명록이 성공적으로 저장되었습니다!');
      setName('');
      setPassword('');
      setContent('');
      getGuestBook(); // 데이터 새로고침
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('방명록 저장 중 오류가 발생했습니다.');
    }
  };

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    getGuestBook();
  }, []);

  return (
    <MainLayout>
      <StyledText fontFamily="JejuMyeongjo" fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
        방명록
      </StyledText>

      <Line marginBottom="69px" />

      <StyledText fontSize="8px" letterSpacing="9.12px" marginBottom="29px">
        축하의 메세지를 남겨주세요
      </StyledText>

      <InputSection>
        <Top>
          <StyledInput
            placeholder="이름"
            marginRight="8px"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Top>
        <StyledInput
          width="250px"
          height="100px"
          placeholder="내용을 입력해주세요."
          marginBottom="23px"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputSection>
      <SendButton onClick={addGuestBook}>등록하기</SendButton>

      <ContentSection>
        {guestBookEntries.map((entry) => (
          <Content key={entry.id}>
            <NameAndTime>
              <StyledText fontSize="10px" fontWeight="bold" marginBottom="12px" marginRight="10px">{entry.name}</StyledText>
              <StyledText fontSize="8px" marginBottom="8px">
                {format(new Date(entry.timestamp.seconds * 1000), 'yyyy-MM-dd HH:mm')}
              </StyledText>
            </NameAndTime>

            <StyledText fontSize="8px">{entry.content}</StyledText>
          </Content>
        ))}
      </ContentSection>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom : 60px;
  padding : 0 20px 0 20px;
  box-sizing : border-box;

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

const InputSection = styled.div`

`
const Top = styled.div`
display : flex;
margin-bottom : 10px;
`

const StyledInput = styled.textarea`
width: ${({ width }) => width || '120px'};
height: ${({ height }) => height || '30px'};
box-sizing : border-box;
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
padding: 10px;
margin-right: ${({ marginRight }) => marginRight || '0px'};
margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
overflow-y:hidden;
  &:focus {
    outline: none; 
  }
  &::placeholder {
    color: #755D5D; 
    transition: opacity 0.3s ease; 
  }
  &:focus::placeholder {
    opacity: 0; 
  }
`

const SendButton = styled.div`
width: 250px;
height: 27px;
  border-radius: 21px;
  background: ${({ isDisabled }) => (isDisabled ? '#CCC' : '#A09B86')};
  color: ${({ isDisabled }) => (isDisabled ? '#777' : '#FFF')};
  font-family: GangwonEdu_OTFLightA;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  margin-bottom : 29px;
`;

const ContentSection = styled.div``

const NameAndTime = styled.div`
display : flex;
align-items : center;
`
const Content = styled.div`
width: 320px;
height: 71px;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
display : flex;
flex-direction : column;
justify-content : center;
padding : 0 15px 0 15px;
box-sizing : border-box;
margin-bottom : 10px;
`