import { Grid, Typography } from "@mui/material";
import React from "react";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

export default function THEME() {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"flex-start"}
      sx={{ py: 2, bgcolor: "#3b4b64" }}
    >
      <Grid item>
        <Typography>Theme</Typography>
      </Grid>
      <Grid item pt={3}>
        <Grid container flexDirection={"row"}>
          <WaterDropOutlinedIcon></WaterDropOutlinedIcon>
          <Typography sx={{pl:3}}>Colors</Typography>
        </Grid>
      </Grid>
      <Grid item pt={3}>
        <Grid container flexDirection={"row"}>
          <ModeOutlinedIcon></ModeOutlinedIcon>
          <Typography sx={{pl:3}}>Typography</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
