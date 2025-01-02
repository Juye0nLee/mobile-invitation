import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as C from '../shared/styles/CommonStyle';
import MainSection from '../entities/Main/MainSection';
import Invitation from '../entities/Main/Invitation';
import Gallery from '../entities/Main/Gallery';
import Date from '../entities/Main/Date';
import ContactWeddingHost from '../entities/Main/ContactWeddingHost';
import Map from '../entities/Main/Map';
import SendHeart from '../entities/Main/SendHeart';
import Attendance from '../entities/Main/Attendance';
import GuestBook from '../entities/Main/GuestBook';
import MusicPlay from '../entities/Main/MusicPlay';

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <MusicPlay/>
          <Wrap data-aos="fade-up">
            <MainSection />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="200">
            <Invitation />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="400">
            <Gallery />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="600">
            <Date />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="800">
            <ContactWeddingHost />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="1000">
            <Map />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="1200">
            <SendHeart />
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="1400">
            <Attendance/>
          </Wrap>
          <Wrap data-aos="fade-up" data-aos-delay="1600">
            <GuestBook/>
          </Wrap>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

const Wrap = styled.div`
width : 100%;
`