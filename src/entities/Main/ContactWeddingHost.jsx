import React from 'react'
import styled from 'styled-components'
//이미지
import CALL from '../../assets/call.svg'
import MESSAGE from '../../assets/message.svg'

export default function ContactWeddingHost() {
    const onClickMessageButton = (name) => {
        switch(name){
            case "이시우" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            case "김은경" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            case "김석환" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            case "송은주" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            case "이상민" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            case "김민주" : window.location.href = 'sms:+821024229779?body=결혼 축하해!'; break;
            default : break;
        }
      };

    const onClikcCallButton = (name) => {
        switch(name){
            case "이시우" : window.location.href = 'tel:+821024229779'; break;
            case "김은경" : window.location.href = 'tel:+821024229779'; break;
            case "김석환" : window.location.href = 'tel:+821024229779'; break;
            case "송은주" : window.location.href = 'tel:+821024229779'; break;
            case "이상민" : window.location.href = 'tel:+821024229779'; break;
            case "김민주" : window.location.href = 'tel:+821024229779'; break;
            default : break;
        }
      };
    return (
        <MainLayout>
            <StyledText fontSize="10px" letterSpacing="11.4px" marginBottom="32px">
                혼주에게 연락하기
            </StyledText>

            <Line marginBottom="60px" />

            <WeddingHostContainer>

                <WeddingHost marginRight="96px">
                    <StyledText color="#769FCA" fontSize="11px" marginBottom="34px">
                        신랑 측 혼주
                    </StyledText>

                    <StyledText color="#574545" fontSize="12px" marginBottom="12px">
                        아버지 이시우
                    </StyledText>
                    <IconContainer marginBottom="10px">
                        <WrapIcon marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("이시우")} />
                        </WrapIcon>
                        <WrapIcon >
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("이시우")} />
                        </WrapIcon>
                    </IconContainer>


                    <StyledText color="#574545" fontSize="12px" marginBottom="12px">
                        어머니 김은경
                    </StyledText>
                    <IconContainer marginBottom="10px">
                        <WrapIcon marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("김은경")} />
                        </WrapIcon>
                        <WrapIcon >
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("김은경")}/>
                        </WrapIcon>
                    </IconContainer>

                </WeddingHost>

                <WeddingHost>
                    <StyledText color="#F28B8B" fontSize="11px" marginBottom="34px">
                        신부 측 혼주
                    </StyledText>

                    <StyledText color="#574545" fontSize="12px" marginBottom="12px">
                        아버지 김석환
                    </StyledText>
                    <IconContainer marginBottom="10px">
                        <WrapIcon backgroundColor="#FFC3C3" marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("김석환")}/>
                        </WrapIcon>
                        <WrapIcon backgroundColor="#FFC3C3">
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("김석환")} />
                        </WrapIcon>
                    </IconContainer>

                    <StyledText color="#574545" fontSize="12px" marginBottom="12px">
                        어머니 송은주
                    </StyledText>
                    <IconContainer marginBottom="10px">
                        <WrapIcon backgroundColor="#FFC3C3" marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("송은주")}/>
                        </WrapIcon>
                        <WrapIcon backgroundColor="#FFC3C3">
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("송은주")} />
                        </WrapIcon>
                    </IconContainer>

                </WeddingHost>
            </WeddingHostContainer>

            <GroomAndBride>

                <Contact>
                    신랑에게 연락하기
                    <IconContainer marginLeft="10px">
                        <WrapIcon marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("이상민")}/>
                        </WrapIcon>
                        <WrapIcon>
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("이상민")}/>
                        </WrapIcon>
                    </IconContainer>
                </Contact>

                <Contact>
                    신부에게 연락하기
                    <IconContainer  marginLeft="10px">
                        <WrapIcon backgroundColor="#FFC3C3" marginRight="5px">
                            <Icon src={CALL} onClick={()=>onClikcCallButton("김민주")}/>
                        </WrapIcon>
                        <WrapIcon backgroundColor="#FFC3C3">
                            <Icon src={MESSAGE} onClick={()=>onClickMessageButton("김민주")}/>
                        </WrapIcon>
                    </IconContainer>
                </Contact>

            </GroomAndBride>

        </MainLayout>
    )
}

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

const WeddingHostContainer = styled.div`
display : flex;
margin-bottom : 58px;
`

const WeddingHost = styled.div`
margin-right: ${({ marginRight }) => marginRight || "0px"};
display : flex;
flex-direction : column;
align-items : center;
`
const IconContainer = styled.div`
display : flex;
margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
margin-left: ${({ marginLeft }) => marginLeft || "0px"};
`
const WrapIcon = styled.div`
width: 26px;
height: 27px;
flex-shrink: 0;
background-color: ${({ backgroundColor }) => backgroundColor || "#C3E0FF"};
border-radius : 50%;
display : flex;
justify-content : center;
align-items : center;
margin-right: ${({ marginRight }) => marginRight || "0px"};
`

const Icon = styled.img`
width : 16px;
height : 16px;
`

const GroomAndBride = styled.div`
margin-bottom : 63px;
`
const Contact = styled.div`
color: #574545;
font-family: JejuMyeongjo;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
display : flex;
align-items : center;
justify-content : center;
margin-bottom : 10px;
`