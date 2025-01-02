import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MUSIC from "../../assets/music/music.mp3";
import MUSIC_ON from '../../assets/musicOn.svg';
import MUSIC_OFF from '../../assets/musicOff.svg';

export default function MusicPlay() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.warn("자동 재생이 제한되었습니다.", error);
        });
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <MainLayout>
      <audio ref={audioRef} loop>
        <source src={MUSIC} type="audio/mpeg" />
        브라우저가 오디오 태그를 지원하지 않습니다.
      </audio>
      <MusicButton src={isPlaying ? MUSIC_OFF : MUSIC_ON} onClick={togglePlay} />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const MusicButton = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 32px;
  cursor: pointer;
`;
