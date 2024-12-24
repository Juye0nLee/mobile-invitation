import React, { useEffect, useState } from 'react'
import * as C from '../shared/styles/ CommonStyle'
import MainSection from '../entities/Main/MainSection'
import Invitation from '../entities/Main/Invitation'
export default function Main() {
  return (
    <C.Page>
      <C.Center>
          <C.PageSpace>

            <MainSection/>

            <Invitation/>

          </C.PageSpace>
      </C.Center>
    </C.Page>
  )
}

