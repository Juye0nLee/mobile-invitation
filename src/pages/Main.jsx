import React, { useEffect, useState } from 'react'
import * as C from '../shared/styles/ CommonStyle'
import MainSection from '../entities/Main/MainSection'
import Invitation from '../entities/Main/Invitation'
import Gallery from '../entities/Main/Gallery'
export default function Main() {
  return (
    <C.Page>
      <C.Center>
          <C.PageSpace>

            <MainSection/>

            <Invitation/>

            <Gallery/>

          </C.PageSpace>
      </C.Center>
    </C.Page>
  )
}

