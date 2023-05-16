import { Grid, Typography } from '@mui/material'
import React from 'react'
import LeftNav from './homeLayout/LeftNav'

export default function HomeLayout () {
  return (
    <Grid container p={1} sx={{bgcolor:'#08bcff'}}>
       {/* left nav  */}
        <LeftNav/>
        {/* Right content */}
        <Grid item sm={8} md={9} lg={10}>
            <Grid container>
              {/* main menu */}
              <Grid item xs={12}>
                <Typography>Top menu</Typography>
              </Grid>
              {/* sub menu */}
              <Grid item xs={12}>
                <Typography>Secondary Menu menu</Typography>
              </Grid>
              {/* dashboard */}
              <Grid item xs={12}>
                <Grid container flexDirection={'column'}>
                  <Grid item>
                    {/* member status */}
                  <Typography>Member Statics</Typography>
                  </Grid>
                  <Grid item>
                    {/* trafic status */}
                  <Typography>Trafic</Typography>
                  </Grid>
                  <Grid item>
                    {/* social status */}
                  <Typography>Social Statics</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}
