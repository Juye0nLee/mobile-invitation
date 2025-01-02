// import React from 'react'
// import styled from 'styled-components'
// export default function Footer() {
//     const TEMPLATE_ID = parseInt(process.env.VITE_APP_KAKAO_TEMPLATE_ID, 10);

//     const shareKaKao = (title, contents) => {
//         window.Kakao.Share.sendCustom({
//             templateId: TEMPLATE_ID,
//             templateArgs: {
//                 title: title,
//                 description: contents,
//             },
//         });
//     };
//     return (
//         <MainLayout>
//             <button onClick={() => shareKaKao("제목제목", "내용내용")}>카톡공유</button>
//         </MainLayout>
//     )
// }


// const MainLayout = styled.div`
// width: 404px;
// height: 100%;
// flex-shrink: 0;
// background-color : #948F79;
// `