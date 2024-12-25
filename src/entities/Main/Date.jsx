import React from "react";
import styled from "styled-components";

export default function Date() {
    const daysInMonth = 28; // 2025년 2월은 28일
    const startDay = 6; // 2025년 2월 1일은 토요일 (0: 일요일 ~ 6: 토요일)
    const daysInPrevMonth = 31; // 2025년 1월은 31일
    const totalCells = 42; // 캘린더는 6행 x 7열 = 42칸

    const prevMonthDays = Array.from(
        { length: startDay },
        (_, i) => daysInPrevMonth - startDay + i + 1
    );

    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const remainingCells = totalCells - (prevMonthDays.length + currentMonthDays.length);
    const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1);
    const calendarDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    return (
        <MainLayout>
            <StyledText fontSize="10px" letterSpacing="11.4px" marginBottom="32px" marginTop="92px">
                DATE
            </StyledText>

            <Line marginBottom="36px"/>

            <WrapCalendar>
                <CalendarContainer>
                    <CalendarHeader>
                        2025 2월 
                        <StyledText marginLeft="4px">
                            오후12:30
                        </StyledText>
                    </CalendarHeader>

                    <DaysHeader>
                        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                            <Day key={day} isHeader marginRight="20px">
                                {day}
                            </Day>
                        ))}
                    </DaysHeader>

                    <DatesContainer>
                        {calendarDays.map((day, index) => (
                            <Day
                                key={index}
                                isPrevious={index < prevMonthDays.length}
                                isNext={index >= prevMonthDays.length + daysInMonth}
                                marginRight="20px"
                                marginBottom="2px"
                                dday={day===15}
                            >
                                {day}
                            </Day>
                        ))}
                    </DatesContainer>

                </CalendarContainer>
            </WrapCalendar>

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
  color: ${({ color }) => color || "#000"};
  font-family: JejuMyeongjo;
  font-size: ${({ fontSize }) => fontSize || "8px"};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  margin-left: ${({ marginLeft }) => marginLeft || "0px"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "0px"};
`;

const Line = styled.div`
  width: ${({ width }) => width || "326px"};
  height: ${({ height }) => height || "0.5px"};
  background-color: #755D5D;
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
`;

const WrapCalendar = styled.div`
width : 100%;
height: 293px;
background-color :#ECE8D7;
margin-bottom : 63px;
padding : 0px 16px 0px 16px;
box-sizing : border-box;
`
const CalendarContainer = styled.div`
width: 362px;
height: 249px;
margin: 20px auto;
border-radius: 22px;
background-color: #fff;
padding: 28px 44px 28px 44px;
box-sizing : border-box;
`;

const CalendarHeader = styled.div`
border-bottom: 1px solid #000;
color: #000;
font-family: SeoulNamsan;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom : 12px;
padding-bottom : 4px;
`;

const DaysHeader = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
margin-bottom : 12px;
`;

const DatesContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div`
box-sizing : border-box;
padding-top : 4px;
border-radius : 50%;
width: 21px;
height: 21px;
color: #000;
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
margin-right: ${({ marginRight }) => marginRight || "0px"};
background-color: ${({ dday, isPrevious, isNext }) =>
    isPrevious || isNext
      ? "none" // 이전 달과 다음 달 날짜는 배경색 없음
      : dday
      ? "#FFB7B7" // 현재 달의 15일 배경색
      : "none"};
color: ${({ isHeader, isPrevious, isNext,dday }) =>
        isHeader
        ? "#000"
        : dday 
        ? "#fff"
        : isPrevious || isNext
        ? "#aaa"
        : "#000"};
`;
