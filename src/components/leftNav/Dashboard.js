import { Button, Grid,  Typography } from '@mui/material'
import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';

export default function Dashboard() {
  return (
    <Grid container  justifyContent={'space-between'} sx={{px:1, py:1, bgcolor:'#45536d'}}>
        <SpeedIcon></SpeedIcon>
        <Typography>Dashboard</Typography>
        <Button variant='contained' sx={{ padding: '1px 1px', fontSize:'.5em' }}>New</Button>
    </Grid>
    
  )
}
