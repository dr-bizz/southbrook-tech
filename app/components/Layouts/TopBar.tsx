import React, { ReactElement, ReactNode } from 'react'
import { AppBar, Grid, Toolbar, useScrollTrigger } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  paddingTop: `env(safe-area-inset-top)`,
  paddingLeft: `env(safe-area-inset-left)`,
  paddingRight: `env(safe-area-inset-right)`,
  backgroundColor: theme.palette.primary.main
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main
}))

const StyledGrid = styled(Grid)(() => ({
  minHeight: '48px'
}))

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

interface Props {
  children?: ReactNode
}

const TopBar = ({ children }: Props): ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return (
    <>
      <StyledAppBar elevation={trigger ? 3 : 0}>
        <StyledToolbar>
          <StyledGrid container alignItems="center">
            {children}
          </StyledGrid>
        </StyledToolbar>
      </StyledAppBar>
      <Offset />
    </>
  )
}

export default TopBar
