import React, { ReactElement, ReactNode } from 'react'
import TopBar from './TopBar'

interface Props {
  children: ReactNode
}

const Basic = ({ children }: Props): ReactElement => {
  return (
    <>
      <TopBar>
        <img src={'/logo.png'} alt="logo" />
      </TopBar>
      {children}
    </>
  )
}

export default Basic
