import React from "react";
import { Grid } from "@mui/material";
import Logo from "../../components/leftNav/Logo";
import Dashboard from "../../components/leftNav/Dashboard";
import Theme from "../../components/leftNav/Theme";
import Components from "../../components/leftNav/Components";

export default function LeftNav() {
  
    return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      lg={2}
      sx={{ backgroundColor: "#3b4b64", borderRadius: "10px 0px 0px 10px" }}
    >
      <Grid container flexDirection={"column"}>
        {/* logo */}
        <Grid item>
          <Logo />
        </Grid>
        {/* dashboard */}
        <Grid item>
          <Dashboard />
        </Grid>
        <Grid item px={1}>
          {/* theame */}
          <Grid item>
            <Theme />
          </Grid>
          {/* components */}
          <Grid item>
            <Components />
          </Grid>
          {/* extras */}
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
