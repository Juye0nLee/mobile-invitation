import React, { useEffect, useState } from 'react'
import * as C from '../shared/styles/ CommonStyle'
import MainSection from '../entities/Main/MainSection'
export default function Main() {
  return (
    <C.Page>
      <C.Center>
          <C.PageSpace>

            <MainSection/>
            
          </C.PageSpace>
      </C.Center>
    </C.Page>
  )
}

