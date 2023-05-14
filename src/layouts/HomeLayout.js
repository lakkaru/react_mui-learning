import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function HomeLayout () {
  return (
    <Grid container p={3}>
       {/* left menu  */}
        <Grid item xs={2} >
            <Grid container flexDirection={'column'}>
              {/* logo */}
              <Grid item>
              <Typography>logo</Typography>
              </Grid>
              {/* dashboard */}
              <Grid item>
              <Typography>dashbord</Typography>
              </Grid>
              {/* theame */}
              <Grid item>
              <Typography>Teame</Typography>
              </Grid>
              {/* components */}
              <Grid item>
              <Typography>components</Typography>
              </Grid>
              {/* extras */}
              <Grid item>

              </Grid>
            </Grid>
        </Grid>
        {/* Right content */}
        <Grid item xs={10}>
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
