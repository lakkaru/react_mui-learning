import { Grid, Typography } from "@mui/material";
import React from "react";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import Component from "../../../components/leftNav/Component";

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

      {/* colors */}
      <Grid item>
        <Component StartIcon={WaterDropOutlinedIcon} name="Colors" />
      </Grid>
      {/* Typography */}
      <Grid item>
        <Component StartIcon={ModeOutlinedIcon} name="Typography" />
      </Grid>
    </Grid>
  );
}
