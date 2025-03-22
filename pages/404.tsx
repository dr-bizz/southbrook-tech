import Head from 'next/head'
import React, { ReactElement } from 'react'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const BoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 300,
  minWidth: 700,
  margin: 'auto',
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

const Custom404 = (): ReactElement => {
  return (
    <>
      <Head>
        <title>{`404 - Page Not Found | Southbrook Tech`}</title>
      </Head>

      <BoxWrapper boxShadow={3} data-testid="EmptyReport">
        <Box mb={2}>
          <DisabledByDefaultOutlinedIcon fontSize="large" color="disabled" />
        </Box>
        <Typography variant="h5">
          We cannot find what you are looking for.
        </Typography>
        <Typography>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Box sx={{ padding: 1, display: 'flex', gap: 2 }}>
          <Button variant="contained" href="/">
            Back to Home
          </Button>
        </Box>
      </BoxWrapper>
    </>
  )
}

export default Custom404
